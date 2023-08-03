import fs from'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let whmods = fs.readFileSync('./src/vn/ga ada.mp3') 
conn.sendFile(m.chat, whmods, '', '', m, true)
}

handler.help = ['.ga ada']
handler.tags = ['vn']
handler.customPrefix = /^(ga mau)$/i
handler.command = new RegExp

export default handler