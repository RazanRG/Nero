import fetch from 'node-fetch'
import axios from 'axios'
import api from 'api-dylux'
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
  if (!args[0]) throw `🚩 *Example:* ${usedPrefix+command} https://vt.tiktok.com/ZS8TQkpTK/`
let json = await api.tiktok(text)

conn.reply(`Proses kak @${m.sender.split(`@`)[0]}`)
 await conn.sendFile(m.chat, json.music, 'error.mp3', null, m, true, {
type: 'audioMessage',  
ptt: false, seconds: 0,contextInfo: { 
forwardingScore: fsizedoc, 
externalAdReply: { 
body: null, 
containsAutoReply: true, 
mediaType: 1, 
mediaUrl: hwaifu.getRandom(), 
renderLargerThumbnail: true, 
showAdAttribution: true, 
sourceId: null, 
sourceType: 'PDF', 
previewType: 'PDF', 
sourceUrl: null, 
thumbnail: await (await fetch(hwaifu.getRandom())).buffer(),
 thumbnailUrl: sgc,
 title: json.nickname }}})
}
handler.help = ['tiktokmp3'].map(v => v + ' <url>')
handler.tags = ['dl']
handler.command = /^(tikaudio|tiktokmp3|ttdlmp3|ttmp3|tiktokdlmp3|gettt)$/i
export default handler