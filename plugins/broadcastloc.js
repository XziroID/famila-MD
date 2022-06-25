const fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
    let groups = Object.keys(await conn.groupFetchAllParticipating())
    m.reply(`_loading wait in minute...._ ${groups.length} grup_\nestimasi selesai ${groups.length * 1.5} detik`)
    for (let id of groups) {
        let bg = 'https://telegra.ph/file/a352c6bb8895f9df1d5ff.mp4'
        await conn.delay(1500)
        await conn.sendButtonLoc(id, await (await fetch(bg)).buffer(), text, wm, 'broadcast', 'broadcast')
    }
    m.reply('*selesai*')
}
handler.help = ['bcloc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(loc)$/i

handler.owner = true

module.exports = handler
