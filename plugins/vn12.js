import fs from'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let whmods = fs.readFileSync('./src/vn/gay1.mp3') 
conn.sendFile(m.chat, whmods, '', '', m, true)
}

handler.help = ['.pasti dia gay']
handler.tags = ['vn']
handler.customPrefix = /^(.pasti dia gay)$/i
handler.command = new RegExp

export default handler