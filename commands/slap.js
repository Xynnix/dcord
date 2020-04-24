const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');
const settings = require("../settings.json");
exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to slap them");
    if(message.mentions.users.first().id === settings.ownerID) return message.reply('You can\'t hurt him you pleblord.:facepalm:');
    const { body } = await superagent
    .get("https://weebs4life.ga/api/slap");
 
    const embed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle(`OwO, ${message.mentions.users.first().username} You got slapped by ${message.author.username}`)
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
    name: 'slap',
    description: 'Slaps someone OwO',
    usage: 'slap'
  };
