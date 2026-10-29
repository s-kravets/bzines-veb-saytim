import {describe,expect,it,vi} from "vitest";
import {getHomeReviews} from "./home-reviews";
describe("homepage reviews",()=>{it("queries approved reviews only, in reverse date order, with a limit",async()=>{const query=vi.fn().mockResolvedValue([{id:"r1",rating:5,body:"A’lo",name:"Mijoz"}]);const result=await getHomeReviews(query);expect(query).toHaveBeenCalledWith({where:{approved:true},orderBy:{createdAt:"desc"},take:3});expect(result).toHaveLength(1)})});
