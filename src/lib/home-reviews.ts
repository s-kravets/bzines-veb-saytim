export type HomeReview = {id:string;rating:number;body:string;name:string};
export async function getHomeReviews(findMany:(args:unknown)=>Promise<HomeReview[]>):Promise<HomeReview[]> {
  return findMany({where:{approved:true},orderBy:{createdAt:"desc"},take:3});
}
