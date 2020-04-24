const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');


exports.run = async (client, message, args, tools) => {
    if (!args[0]) return message.reply("You need to input a sentence to OwOify")
    const { body } = await superagent
    .get("https://nekos.life/api/v2/owoify?text=" + args.join('%20'));
    const emb = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(body.owo)
    message.channel.send(emb)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'owoify',
  description: 'OwO-ify a message',
  usage: 'owoify'
};
