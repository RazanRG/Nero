function handler(m) {
  
  const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nRAZAN RG\nitem1.TEL;waid=62895602242948:62895602242948\nitem1.X-ABLabel:\nJangan Spam Kak\nURL;My Web:https://nansofficial.me\nEMAIL;Email Owner:razantanvan@gmail.com\nORG:gabut bikin bot\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })


let handler = async (m, { conn }) => {
let whmods = fs.readFileSync('./src/mp3/owner.mp3') 
conn.sendFile(m.chat, whmods, '', '', m, true)
}

  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler