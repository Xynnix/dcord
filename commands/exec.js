const childProcess = require('child_process');
const settings = require("../settings.json");
exports.run = (client, message, args, data, errors) => {
  if (message.author.id !== settings.ownerID) return message.channel.send('You scrub, what made you think you\'d be able to do that??');
    childProcess.exec(args.join(' '), {},
        (err, stdout, stderr) => {
            if (err) return message.channel.sendCode('', err.message);
            message.channel.sendCode('', stdout);
        });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'exec',
  description: 'Executes a process command.',
  usage: 'exec'
};
