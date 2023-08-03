import fs from'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let whmods = fs.readFileSync('./src/vn/kagak ada.mp3') 
conn.sendFile(m.chat, whmods, '', '', m, true)
}

handler.help = ['.kagak ada']
handler.tags = ['vn']
handler.customPrefix = /^(.kagak ada)$/i
handler.command = new RegExp

export default handler