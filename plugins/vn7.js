import fs from'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let whmods = fs.readFileSync('./src/vn/jangan toxic.mp3') 
conn.sendFile(m.chat, whmods, '', '', m, true)
}


handler.help = ['.jangan toxic']
handler.tags = ['vn']
handler.customPrefix = /^(.jangan toxic)$/i
handler.command = new RegExp

export default handler