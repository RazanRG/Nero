import fs from'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let whmods = fs.readFileSync('./src/vn/daisuki.mp3') 
conn.sendFile(m.chat, whmods, '', '', m, true)
}

handler.help = ['.daisuki']
handler.tags = ['vn']
handler.customPrefix = /^(.daisuki)$/i
handler.command = new RegExp

export default handler