import fs from'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let whmods = fs.readFileSync('./src/vn/heeh.mp3') 
conn.sendFile(m.chat, whmods, '', '', m, true)
}

handler.help = ['.heeh']
handler.tags = ['vn']
handler.customPrefix = /^(.heeh)$/i
handler.command = new RegExp

export default handler