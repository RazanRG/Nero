
function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

let handler = async (m, { conn }) => {
let whmods = fs.readFileSync('./src/mp3/owner.mp3') 
conn.sendFile(m.chat, whmods, '', '', m, true)

}

}

handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño', 'fgowner'] 

export default handler
