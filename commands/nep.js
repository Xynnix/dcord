const nep = require('../data/nep.json');
const Discord = require('discord.js');
const customisation = require('../customisation.json');

exports.run = (client, message, args) => {
    args = args.join(" ");
    const embed = new Discord.RichEmbed()
    .setColor(Math.floor(Math.random()*16777215))
    .setTimestamp()
    .setTitle("NEP NEP TOP NEP")
    .setImage(`${nep[Math.floor(Math.random() * nep.length)]}`)
    message.channel.send({embed})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'nep',
  description: 'Sends a random nep gif or image.',
  usage: 'nep'
};
