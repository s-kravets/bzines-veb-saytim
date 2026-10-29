import { z } from "zod";
export const orderSchema = z.object({
  customerName: z.string().trim().min(2).max(80),
  contact: z.string().trim().min(2).max(100),
  service: z.enum(["Slayd", "Sayt", "Bot", "Taqdimot"]),
  pages: z.preprocess((v) => v === "custom" || v === "" ? undefined : v, z.coerce.number().int().min(1).max(300).optional()),
  topic: z.string().trim().max(150).optional(),
  description: z.string().trim().min(10).max(3000),
  style: z.string().trim().max(300).optional(),
  platform: z.string().trim().max(80).optional(),
  extra: z.string().trim().max(1500).optional(),
});
