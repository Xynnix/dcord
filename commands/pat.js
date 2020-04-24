const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to pat them");
    if (message.mentions.users.first().id === client.user.id) return message.channel.send('*pats you back* ^~^');
    const { body } = await superagent
    .get("https://nekos.life/api/pat");

    const embed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle(`OwO, ${message.author.username} patted ${message.mentions.users.first().username}`)
    .setImage(body.url)
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'pat',
    description: 'Pats someone OwO',
    usage: 'pat'
  };
