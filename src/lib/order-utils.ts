export function formatOrderNumber(sequence: number): string {
  if (!Number.isSafeInteger(sequence) || sequence < 1) throw new RangeError("Buyurtma tartib raqami musbat butun son bo‘lishi kerak.");
  return `KS-${String(sequence).padStart(4, "0")}`;
}
export function queuePosition(target: {id:string;createdAt:Date}, openOrders: Array<{id:string;createdAt:Date}>): number {
  const ordered=[...openOrders].sort((a,b)=>a.createdAt.getTime()-b.createdAt.getTime()||a.id.localeCompare(b.id));
  const index=ordered.findIndex(order=>order.id===target.id);
  return index < 0 ? 0 : index + 1;
}
