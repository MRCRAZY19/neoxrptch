exports.run = {
   usage: ['menu', 'help', 'bot'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [{
         title: 'All COMMAND',
         rowId: `${isPrefix}menutype 1`,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡 `
      }

]
      let text = '𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡.\n\n'
      text += '◦ *instagram* : http://instagram.com/mr_johan_shezir *(v2.2.0)*\n\n'
      text += 'Ela konto talib/tilmid, Sift Lya *#bac*'
      await client.sendList(m.chat, '', text, '', 'click!', [{
         rows
      }], m)
   },
   error: false
}
exports.run = {
   usage: ['menu', 'help', 'bot'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [{
         title: 'DOWNLOADER',
         rowId: `${isPrefix}menutype 1`,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
      }, {
         title: 'GROUP TOOLS',
         rowId: `${isPrefix}menutype 2`,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
      }, {
         title: 'UTILITIES',
         rowId: `${isPrefix}menutype 3`,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
      }, {
         title: 'OWNER TOOLS',
         rowId: `${isPrefix}menutype 4`,
         description: `𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡`
      }]
      let text = 'An autonomous program on the internet or another network that can interact with systems or users.\n\n'
      text += '◦ *Database* : PostgreSQL\n'
      text += '◦ *Library* : Baileys v4.3.0\n'
      text += '◦ *Rest API* : https://api.nxr.my.id\n'
      text += '◦ *Source* : https://github.com/neoxr/neoxr-bot *(v2.2.0)*\n\n'
      text += 'If you find an error or want to upgrade premium plan contact the owner.'
      await client.sendList(m.chat, '', text, '', 'Tap!', [{
         rows
      }], m)
   },
   error: false
}
