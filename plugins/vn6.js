import fs from'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let whmods = fs.readFileSync('./src/vn/oy.mp3') 
conn.sendFile(m.chat, whmods, '', '', m, true)
}

handler.help = ['.oy']
handler.tags = ['vn']
handler.customPrefix = /^(.oy)$/i
handler.command = new RegExp

export default handler