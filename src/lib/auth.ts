import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
const COOKIE = "ks_admin";
function key() {
  const secret = process.env.SESSION_SECRET;
  if (!secret || secret.length < 32) throw new Error("SESSION_SECRET kamida 32 belgidan iborat bo‘lishi kerak.");
  return new TextEncoder().encode(secret);
}
export async function makeSession() {
  const token = await new SignJWT({ role: "admin" }).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("8h").sign(key());
  (await cookies()).set(COOKIE, token, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", maxAge: 28800 });
}
export async function isAdmin() {
  try {
    const token = (await cookies()).get(COOKIE)?.value;
    if (!token) return false;
    return (await jwtVerify(token, key())).payload.role === "admin";
  } catch { return false; }
}
export async function clearSession() { (await cookies()).delete(COOKIE); }
