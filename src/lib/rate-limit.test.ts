import { beforeEach, describe, expect, it } from "vitest";
import { rateLimit, resetRateLimitsForTests } from "./rate-limit";
describe("rate limiter",()=>{
 beforeEach(()=>resetRateLimitsForTests());
 it("allows configured attempts and blocks the next one",()=>{expect(rateLimit("ip",2,1000,10)).toBe(true);expect(rateLimit("ip",2,1000,11)).toBe(true);expect(rateLimit("ip",2,1000,12)).toBe(false)});
 it("resets after the window",()=>{expect(rateLimit("ip",1,1000,10)).toBe(true);expect(rateLimit("ip",1,1000,11)).toBe(false);expect(rateLimit("ip",1,1000,1010)).toBe(true)});
 it("limits order creation requests",()=>{for(let i=0;i<5;i++)expect(rateLimit("order:client",5,60000,20+i)).toBe(true);expect(rateLimit("order:client",5,60000,30)).toBe(false)});
});
