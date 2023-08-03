import fs from'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let whmods = fs.readFileSync('./src/vn/goblok.mp3') 
conn.sendFile(m.chat, whmods, '', '', m, true)
}

handler.help = ['.goblok']
handler.tags = ['vn']
handler.customPrefix = /^(.goblok)$/i
handler.command = new RegExp

export default handler