exports.run = (client, message) => {
    let args = message.content.split(" ").slice(1);
    let arg = message.content.includes
    message.delete();
    if (arg("@everyone") || arg("@here")) return message.channel.send("You ain't making me Ping anyone BOI!");
    message.channel.send(args.join(" "));
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "say",
    description: "Makes the bot repeat your message.",
    usage: "say [message]"
};
