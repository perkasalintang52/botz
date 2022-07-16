let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI OWNER* ´ˎ˗
│ ✎ _Nama_ : Lintang
│ ✎ _Sekolah_ : Lulus
│ ✎ _Umur_ : Kepo
│ ✎ _Asal_ : Jakarta Selatan
│ ✎ _Status_ : Turu deck
│ ✎ _Official Grup 1_ :
│    Ga Ada
│ ✎ _Official Grup 2_ :
│    Ga Ada
│ ✎ _Saweria _:
│    https://saweria.co/joceylintangg
│ ✎ _Instagram_ : 
│    https://instagram.com/joceylintangg
│ ✎ _WhatsApp_ :
│    wa.me/6281322577123
╰───────────────────
`.trim(), m)
}

handler.help = ['infojarot']
handler.tags = ['main', 'utama']
handler.command = /^(infojarot)$/i

handler.exp = 150

module.exports = handler
