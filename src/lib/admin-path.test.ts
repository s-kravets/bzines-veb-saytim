import { describe, expect, it } from "vitest";
import { adminPaths } from "./admin-path";
describe("admin routes",()=>{
 it("lists protected admin pages separately from public login",()=>{expect(adminPaths).toContain("/admin");expect(adminPaths).toContain("/admin/mijozlar");expect(adminPaths).not.toContain("/admin/login")});
});
