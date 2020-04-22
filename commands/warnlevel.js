const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");
const customisation = require('../customisation.json');

exports.run = (client, message, args) => {
    let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
    let user = message.mentions.users.first();
    if(message.mentions.users.size < 1) return message.reply('You must mention someone to check their warns.').catch(console.error);
    if(!user) return message.reply("Couldn't find that user...");
    if(!warns[user.id]) warns[user.id] = {
      warns: 0
    };

    const embed = new Discord.RichEmbed()
    .setColor(0xFFFF01)
    .setTimestamp()
    .addField('Action:', 'Warn Check')
    .addField('User:', `${user.username}#${user.discriminator}`)
    .addField('Number of warnings:', warns[`${user.id}, ${message.guild.id}`].warns)
    .setFooter(`© Cryptonix X Mod Bot by ${customisation.ownername}`);
    message.channel.send({embed});
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'warnlevel',
    description: 'Show how many warnings a user have',
    usage: 'warnlevel [mention]'
  };
  //message.guild.member() || message.guild.members.get(args[0])