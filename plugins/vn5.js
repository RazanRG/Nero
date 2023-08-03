import fs from'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let whmods = fs.readFileSync('./src/vn/iya kak.mp3') 
conn.sendFile(m.chat, whmods, '', '', m, true)
}

handler.help = ['.iya kak']
handler.tags = ['vn']
handler.customPrefix = /^(.iya kak)$/i
handler.command = new RegExp

export default handler