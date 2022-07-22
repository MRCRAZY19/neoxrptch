exports.run = {
   usage: ['bac','lbac','bella'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [{
         title: '🩸 MATHEMATIQUES ',
         rowId: `${isPrefix}maths`,
         description: ``
      }, {
         title: '🩸 PHYSIQUES',
         rowId: `${isPrefix}pc`,
         description: ``
      }, {
         title: '🩸 SVT',
         rowId: `${isPrefix}svt`,
         description: ``
      }, {
         title: '🩸 PHYLOSOPHIE',
         rowId: `${isPrefix}phylo`,
         description: ``
      }]
      let text='خصيصا لتلاميذ البكالوريا هذا الحقل من اجل مساعدتكم ونتمنى ان ينال  كل ما قدمناه لكم اعجابكم وشكرا.\n\n'
      text += '◦ *DEVELOPER* :𝗠𝙍 𝗬𝗢𝗨𝗖𝗛𝗡\n'
      text += '◦ *🟣FACEBOOK* : https://www.facebook.com/profile.php?id=100027327995013\n'
      text += '◦ *🟣INSTAGRAM* : http://instagram.com/mr_johan_shezir\n\n'
      text += 'I hope that you will follow me on Instagram, and if you have any questions, do not hesitate to come to me through the links above. Thank you.'
      await client.sendList(m.chat, '', text, '', 'Tap!', [{
         rows
      }], m)
   },
   error: false
}
