exports.run = (client, message, args) => {
  if (!client.lockit) client.lockit = [];
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return msg.reply("❌**Error:** You don't have the permission to do that!");

    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send('Lockdown lifted <a:balancecheck:556017659419033653> WEEEEEEEEEEEEEEEEEEEEEE, enjoy talking while you still can:wink:');
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    })
  };
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['uld'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'unlockdown',
    description: 'This will unlockdown a channel.',
    usage: 'unlockdown'
  };