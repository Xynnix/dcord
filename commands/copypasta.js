const copypastas = require('../data/copypastas.json');
exports.run = (client, message, args) => {
    args = args.join(" ");
    message.channel.send(`${copypastas[Math.floor(Math.random() * copypastas.length)]}`);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'copypasta',
  description: 'Sends a random copypasta.',
  usage: 'copypasta'
};
