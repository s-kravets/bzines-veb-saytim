"use client";
import Link from "next/link";
import { useState } from "react";
const links = [["Bosh sahifa", "/"], ["Buyurtma berish", "/buyurtma"], ["Buyurtmalarim", "/buyurtmalarim"], ["Narxlar", "/narxlar"], ["Sharhlar", "/sharhlar"], ["Profil", "/profil"], ["Admin bilan suhbat", "/suhbat"]];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="header"><div className="container nav"><Link className="brand" href="/">KRAVETS <em>SLIDES</em></Link><button className="hamburger" onClick={() => setOpen(!open)} aria-label="Navigatsiyani ochish" aria-expanded={open}>☰</button><nav aria-label="Asosiy navigatsiya" className={`navlinks ${open ? "open" : ""}`}>{links.map(([label, href]) => <Link className={href === "/buyurtma" ? "button button-sm" : undefined} key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}</nav></div></header>;
}
export function SiteFooter() { return <footer className="footer"><div className="container footer-row"><Link className="brand" href="/">KRAVETS <em>SLIDES</em></Link><span>G‘oyangizni ta’sirli taqdim etamiz.</span><span>© {new Date().getFullYear()} KRAVETS SLIDES</span></div></footer>; }
