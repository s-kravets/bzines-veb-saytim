import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const prices = [
    ["Slayd", 10, 10000], ["Slayd", 20, 20000], ["Slayd", 30, 30000],
    ["Taqdimot", 10, 15000], ["Taqdimot", 20, 20000], ["Taqdimot", 30, 32000],
  ] as const;
  for (const [service, pages, amount] of prices) {
    await prisma.price.upsert({ where: { service_pages: { service, pages } }, update: { amount }, create: { service, pages, amount } });
  }
}
main().finally(() => prisma.$disconnect());
