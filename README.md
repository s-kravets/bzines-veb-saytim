# KRAVETS SLIDES

Uzbek Latin tilidagi full-stack xizmat va buyurtma sayti. Next.js App Router, TypeScript, SQLite/Prisma bilan ishlaydi.

## Windows 11 da ishga tushirish

1. Node.js 20.9 yoki yangirog‘ini o‘rnating.
2. PowerShell `npm.ps1` skriptini bloklasa, execution policy’ni o‘zgartirmang: `npm.cmd install` ishlating. Oddiy terminalda `npm install` ham mumkin.
3. `.env.example` nusxasini `.env` nomi bilan yarating.
4. Kuchli administrator paroli hashini yarating: `npm run admin:hash -- "KuchliParolKamida12!"`. Terminalda ko‘ringan hashni `.env` ichidagi `ADMIN_PASSWORD_HASH` qiymatiga qo‘ying. Haqiqiy parolni `.env`ga qo‘ymang.
5. `.env` ichida `ADMIN_USERNAME` va kamida 32 belgili tasodifiy `SESSION_SECRET` qiymatini kiriting. `DATABASE_URL="file:./dev.db"` qiymatini o‘zgarishsiz qoldirishingiz mumkin.
6. `npx prisma db push` bazani yaratadi, `npm run db:seed` boshlang‘ich narxlarni qo‘shadi. PowerShell bloklasa, `npx.cmd prisma db push` kiriting.
7. `npm run dev` bilan saytni ishga tushiring; agar `npm.ps1` bloklansa, `npm.cmd run dev` ishlating. Sayt odatda `http://localhost:3000` da ochiladi.
8. Admin uchun `/admin/login` sahifasidan `.env`dagi administrator hisob ma’lumotlari bilan kiring.

PowerShell skript siyosati sabab `npm` yoki `npx` tanilmasa, mos ravishda `npm.cmd ...` va `npx.cmd ...` dan foydalaning.

## Funksiyalar

- Ommaviy xizmat sahifalari, responsive navigatsiya va narxlar.
- Slayd, sayt, bot va taqdimot buyurtmalarini SQLite bazasida saqlash; KS-raqam, narx va navbat holatini kuzatish.
- Administratorga himoyalangan JWT httpOnly cookie sessiyasi, bcrypt parol hash, muvaffaqiyatsiz kirish hodisalari va kirish chegaralash.
- Admin buyurtmalarni qidirishi, holat/narx o‘zgartirishi, mijoz tarixini ko‘rishi; sharhlarni tasdiqlashi; mijozlar bilan yozishishi; narxlarni tahrirlashi mumkin.
- Telegram/Instagram API integratsiyasi talab qilinmaydi. Username faqat aloqa rekviziti sifatida saqlanadi.
- Admin panel: status ko‘rsatkichlari, 7/30 kun buyurtmalari, bajarilgan va narxi bor buyurtmalardan taxminiy daromad, o‘qilmagan xabarlar, qidiruv/filtr/sahifalash, mijoz tarixi, sharh moderatsiyasi, narx tahriri va qidiriladigan xavfsizlik jurnali.
- Administrator suhbatlari brauzer sahifasini qayta yuklamasdan yangilanadi; o‘qilmagan xabarlar bazada belgilanadi.

## Tekshiruvlar

- `npm test` (yoki `npm.cmd test`) — buyurtma raqami/validatsiyasi/navbat, mijoz buyurtmasiga ruxsat, admin sessiyasi/login, status-narx, sharh moderatsiyasi va rate limit unit/API testlari.
- `npm run lint` (yoki `npm.cmd run lint`) — ESLint.
- `npm run build` (yoki `npm.cmd run build`) — Prisma client va production build.
- Responsive ko‘rinishni 360–430 px telefon, planshet va desktopda brauzerda tekshiring. Ushbu ish sessiyasida npm registry sekin bo‘lgani uchun build/browser tekshiruvi yakunlanmagan bo‘lishi mumkin.

## Muhim

SQLite mahalliy ishlab chiqish uchun qulay. Production deployda boshqariladigan PostgreSQL va Redis asosidagi rate limit ishlating. `.env` secrets git-ignored. Admin paroli, hash, secret yoki `.env` commit qilmang. Hozir tashqi xizmatlar ishlatilmaydi: Telegram bot tokeni, SMTP/email kalitlari yoki boshqa credential talab qilinmaydi. Agar kelajakda bot yoki email jo‘natish qo‘shilsa, shunda Telegram bot tokeni yoki email provayder SMTP/API kaliti kerak bo‘ladi.
