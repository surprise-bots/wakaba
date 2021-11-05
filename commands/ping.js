const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
    name: "ping",
    description: "Doesnt reply with pong",
    execute(message, args) {
        message.channel.send("Ping pang pong");
    },
};