  exports.run = {
   usage: ['menu', 'help', 'bot'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [{
         title: 'ALL COMMANDS',
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
      let text = '𝗛𝗔𝗟𝗙 𝗕𝗢𝗧\n'
      text += '𝙱𝚈\n'
      text += '𝗠𝗥 𝗬𝗢𝗨𝗖𝗛𝗡\n'
      text += '◦ *instagram* : http://instagram.com/mr_johan_shezir\n'
      text += '◦ *facebook* : https://www.facebook.com/profile.php?id=100027327995013'
      await client.sendList(m.chat, '', text, '', 'click!', [{
         rows
      }], m)
   },
   error: false
}
