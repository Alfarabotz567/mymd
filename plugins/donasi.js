const qrku = "https://telegra.ph/file/d5c3ea50dd15347b7bd38.jpg"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrku, `
╭─「 Donasi • Dana 」
│ • Telkomsel [081352848936]
│ • Dana  [081251549899]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6281251549899
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
