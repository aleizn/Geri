let handler = async (m, { conn, text, command, usedPrefix, args }) => {
  let time = user.lastmining + 10000 //tiempo de espera en min
let user = global.db.data.users[m.sender]
if (new Date - user.lastmiming < 10000) return await conn.reply(m.chat, `*ESPERA UNOS MINUTOS PARA USAR OTRO COMANDO*`,  m)
let pp = 'https://www.bighero6challenge.com/images/thumbs/Piedra,-papel-o-tijera-0003318_1584.jpeg'
if (!args[0]) throw conn.sendHydrated(m.chat, 'ππππΏππΌ, ππΌπππ, π ππππππΌ\n\nππͺππππ¨ πͺπ¨ππ§ π‘π€π¨ π½ππππππ π₯ππ§π ππͺπππ§ π€ π©ππ’ππππ£ π₯πͺππππ¨ πͺπ¨ππ§ ππ¨π©π€π¨ ππ€π’ππ£ππ€π¨:\n.ppt π₯ππππ§π\n.ppt π₯ππ₯ππ‘\n.ppt π©ππππ§π\n\nππ¨π ππ£ π’ππ£πͺπ¨ππͺπ‘ππ¨', wm, pp, null, null, null, null, [
['πππππ§π π₯', `${usedPrefix + command} piedra`],
['πππ₯ππ‘ π', `${usedPrefix + command} papel`],
['πππππ§π βοΈ', `${usedPrefix + command} tijera`]
], m)
var astro = Math.random()
if (astro < 0.34) {
astro = 'piedra' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera' 
} else {
astro = 'papel'
}
if (text == astro) {
global.db.data.users[m.sender].exp += 500
m.reply(`π° Empate!\n\n*ππ» Tu: ${text}\nππ» El Bot: ${astro}\nπ Premio +500 XP*`)
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`π₯³ TΓΊ ganas! π\n\n*ππ» Tu: ${text}\nππ» El Bot: ${astro}\nπ Premio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`β οΈ TΓΊ pierdes! β\n\n*ππ» Tu: ${text}\nππ» El Bot: ${astro}\nβ Premio -300 XP*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`π₯³ TΓΊ ganas! π\n\n*ππ» Tu: ${text}\nππ» El Bot: ${astro}\nπ Premio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`β οΈ TΓΊ pierdes! β\n\n*ππ» Tu: ${text}\nππ» El Bot: ${astro}\nβ Premio -300 XP*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`π₯³ TΓΊ ganas! π\n\n*ππ» Tu: ${text}\nππ» El Bot: ${astro}\nπ Premio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`β οΈ TΓΊ pierdes! β\n\n*ππ» Tu: ${text}\nππ» El Bot: ${astro}\nβ Premio -300 XP*`)
}
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`π₯³ TΓΊ ganas! π\n\n*ππ» Tu: ${text}\nππ» El Bot: ${astro}\nπ Premio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`β οΈ TΓΊ pierdes! β\n\n*ππ» Tu: ${text}\nππ» El Bot: ${astro}\nβ Premio -300 XP*`)
}
} else if (text == 'piedra') {
if (astro == 'tijera') {
global.db.data.users[m.sender].exp += 1000
m.reply(`π₯³ TΓΊ ganas! π\n\n*ππ» Tu: ${text}\nππ» El Bot: ${astro}\nπ Premio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`β οΈ TΓΊ pierdes! β\n\n*ππ» Tu: ${text}\nππ» El Bot: ${astro}\nβ Premio -300 XP*`)
}
}}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt)$/i
export default handler
