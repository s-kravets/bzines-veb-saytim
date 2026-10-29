import { describe, expect, it } from "vitest";
import { formatOrderNumber, queuePosition } from "./order-utils";
describe("order helpers",()=>{
  it("formats unique sequence values as KS order numbers",()=>{const a=formatOrderNumber(1);const b=formatOrderNumber(2);expect(a).toBe("KS-0001");expect(b).toBe("KS-0002");expect(new Set([a,b]).size).toBe(2)});
  it("computes queue positions in created order with a deterministic tie break",()=>{const createdAt=new Date("2026-10-28T10:00:00Z");const open=[{id:"c",createdAt},{id:"a",createdAt},{id:"b",createdAt:new Date("2026-10-28T09:00:00Z")}];expect(queuePosition(open[0],open)).toBe(3);expect(queuePosition(open[1],open)).toBe(2);expect(queuePosition({id:"missing",createdAt},open)).toBe(0)});
  it("rejects invalid sequence numbers",()=>{expect(()=>formatOrderNumber(0)).toThrow();expect(()=>formatOrderNumber(1.2)).toThrow()});
});
