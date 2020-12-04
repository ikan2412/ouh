exports.donate = (id, Bot, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───
         
╔════════════════════
║ *Donasi Ke ${Bot}*
╠════════════════════
║├≽️⚜ *Saweria*: _https://saweria.co/anker_2412_
║├≽️⚜ *PULSA*: _0813-6864-6011_
║├≽️⚜ *GOPAY*: _0813-6864-6011_
╠════════════════════
║  *${Bot}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwhatsapp}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${Bot}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ _*MADE BY Dark Mini Bot*_
╚════════════════════`
}

