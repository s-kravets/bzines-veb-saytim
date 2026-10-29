import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader, SiteFooter } from "@/components/site-shell";
export const metadata: Metadata = { title: "KRAVETS SLIDES — Dizayn va raqamli yechimlar", description: "Slayd, taqdimot, sayt va bot buyurtma qiling." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="uz"><body><SiteHeader />{children}<SiteFooter /></body></html>; }
