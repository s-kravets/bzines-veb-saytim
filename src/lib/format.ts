export const statusLabel: Record<string, string> = { ACCEPTED: "Qabul qilindi", IN_PROGRESS: "Jarayonda", COMPLETED: "Bajarildi" };
export const money = (amount?: number | null) => amount == null ? "Kelishiladi" : `${new Intl.NumberFormat("uz-UZ").format(amount)} so‘m`;
