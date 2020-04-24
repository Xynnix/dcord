const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
    const { body } = await superagent
    .get("https://weebs4life.ga/api/neko");
    link = body.neko;

    const embed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle("Here's Your Neko OwO")
    .setImage(body.neko)
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'neko',
    description: 'Sends a random Neko OwO',
    usage: 'neko'
  };
