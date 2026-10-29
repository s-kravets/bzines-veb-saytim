"use client";
import { useState } from "react";
const services = ["Slayd", "Sayt", "Bot", "Taqdimot"];
export default function OrderForm() {
  const [service, setService] = useState("Slayd");
  const [error, setError] = useState("");
  const [done, setDone] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError(""); setDone(""); setBusy(true);
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch("/api/orders", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Buyurtma yuborilmadi.");
      setDone(`Buyurtmangiz qabul qilindi. Raqami: ${data.number}. Uni saqlab qo‘ying.`); event.currentTarget.reset(); setService("Slayd");
    } catch (e) { setError(e instanceof Error ? e.message : "Xatolik yuz berdi."); } finally { setBusy(false); }
  }
  const pages = service === "Slayd" || service === "Taqdimot";
  return <form className="form-card" onSubmit={submit}><div className="form-grid">
    <div className="field"><label htmlFor="customerName">Ismingiz</label><input id="customerName" name="customerName" required minLength={2} maxLength={80} placeholder="Ism familiya" /></div>
    <div className="field"><label htmlFor="contact">Telegram yoki Instagram username</label><input id="contact" name="contact" required maxLength={100} placeholder="@username" /></div>
    <div className="field"><label htmlFor="service">Xizmat turi</label><select id="service" name="service" value={service} onChange={(e) => setService(e.target.value)}>{services.map((s) => <option key={s}>{s}</option>)}</select></div>
    {pages && <><div className="field"><label htmlFor="pages">Sahifalar soni</label><select id="pages" name="pages" defaultValue="10"><option value="10">10 sahifa</option><option value="20">20 sahifa</option><option value="30">30 sahifa</option><option value="custom">Boshqa miqdor</option></select><span className="form-help">Narxlar bo‘limida tariflar bilan tanishing.</span></div><div className="field full"><label htmlFor="topic">Mavzu</label><input id="topic" name="topic" required placeholder="Taqdimot mavzusi" /></div></>}
    {service === "Bot" && <div className="field"><label htmlFor="platform">Maqsadli platforma</label><select id="platform" name="platform"><option>Telegram</option><option>Instagram</option><option>Veb-sayt</option><option>Boshqa</option></select></div>}
    <div className="field"><label htmlFor="style">Dizayn uslubi</label><input id="style" name="style" placeholder="Minimal, korporativ, yorqin..." /></div>
    <div className="field full"><label htmlFor="description">Loyiha tavsifi</label><textarea id="description" name="description" required minLength={10} maxLength={3000} placeholder="Nima tayyorlab berishimiz kerak? Batafsil yozing..." /></div>
    {(service === "Sayt" || service === "Bot") && <div className="field full"><label htmlFor="extra">Qo‘shimcha talablar</label><textarea id="extra" name="extra" maxLength={1500} placeholder="Muhim qo‘shimcha ma’lumotlar" /></div>}
    <div className="field full"><button className="button" disabled={busy}>{busy ? "Yuborilmoqda..." : "Buyurtmani yuborish →"}</button><span className="form-help">Narx va muddat tafsilotlarini administrator siz bilan kelishadi.</span></div>
  </div>{error && <div className="alert" role="alert">{error}</div>}{done && <div className="alert success" role="status">{done}</div>}</form>;
}
