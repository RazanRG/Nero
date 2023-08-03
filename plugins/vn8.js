iimport fs from'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let whmods = fs.readFileSync('./src/vn/ara ara.mp3') 
conn.sendFile(m.chat, whmods, '', '', m, true)
}

handler.help = ['.ara ara']
handler.tags = ['vn']
handler.customPrefix = /^(.ara ara)$/i
handler.command = new RegExp

export default handlerer