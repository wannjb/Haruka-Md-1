let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let helloarie = fs.readFileSync('./mp3/menu.mp3') 
conn.sendFile(m.chat, helloarie, '', '', m, true)
}

handler.customPrefix = /^(Menu|.menu|menu|#menu)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler