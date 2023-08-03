import fs from'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let whmods = fs.readFileSync('./src/vn/ga boleh.mp3') 
conn.sendFile(m.chat, whmods, '', '', m, true)

}



handler.help = ['.ga boleh']
handler.tags = ['vn']
handler.customPrefix = /^(.ga boleh)$/i
handler.command = new RegExp

export default handler
