import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
≡*My Project:* 2 agustus 2023
*Name:* Razan MD
*Contact:* coming soon


⫹❰⫺ BiG Thanks To ⫹❱⫺
Allah Yang Maha Esa
Orang Tua
Teman Gw

⫹⫺ The Name That Helped me ⫹⫺ 

ZYKO MD
Alvin
Garin
Grup gabut 2.3 
`

    let pp = 'https://i.ibb.co/y0vgNPT/20230723-112852.jpg'
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
   
}
handler.tags = ['info']
handler.help = ['.tqto']
handler.customPrefix = /^(tqto|tq|.tqto|.tq)$/i
handler.command = new RegExp

export default handler