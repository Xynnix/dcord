exports.run = (client, message, args) => {
    if(message.author.id !== "242263403001937920") return message.channel.send(`**»** ${message.author}, you don't have permission to do that❌`);
    let id = args[0];
    if (!id) id = message.guild.id;
    return message.guild.leave(id);
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
exports.help = {
  name: 'leave',
  description: 'Leave the server that the bot is in.',
  usage: 'leave'
};
  