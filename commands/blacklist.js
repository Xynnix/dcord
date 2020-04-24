const Discord = require("discord.js");
const fs = require('fs');
const customisation = require('../customisation.json');
const settings = require('../settings.json');
exports.run = async (client, message, args) => {
    //message.delete();
    let blacklist = JSON.parse(fs.readFileSync("./blacklist.json", "utf8"));
    let user = args[0];
    const amount = parseInt(user);

    if (isNaN(amount)) {
        return message.reply('Please enter a valid UserID');
    }
    if (!message.author.id === settings.ownerID) return message.reply("You don't have the permission to use this command...:facepalm:");
    //if (user = "blacklist") return message.reply('You need to imput a User ID');
    if (!user) return message.reply('You need to input a User ID');
    if (args[0] === settings.ownerID) return message.reply("You can't blacklist yourself, Dev:joy: That would be horrible.");

    if (!blacklist[user]) {
        blacklist[user] = {
          id: user,
          state: true//,
          //name: user.username
        }
        message.reply(`<@${user}> is now Blacklisted!`);    
        fs.writeFile("./blacklist.json", JSON.stringify(blacklist), err => {
            if(err) throw err;
          });
        
        client.guilds.forEach((guild) => {
        if(guild.ownerID === user) {
          message.guild.leave(guild.id)
        }
    })

    return;
    }
    if (blacklist[user].state === true) {
        message.reply("That user have already been blacklisted");
    return;
    };

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
exports.help = {
    name: 'blacklist',
    description: 'blacklist a user.',
    usage: 'blacklist [userid]'
  };
