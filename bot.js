// Required Libraries
const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { MessageActionRow, MessageButton } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST }   = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { createConnection } = require('mysql');

// Required Variables
const token      = process.env.BOT_TOKEN;
const clientId   = process.env.CLIENT_ID;
const guildId    = process.env.GUILD_ID;
const mycnf = {
    "host" : process.env.MYSQL_HOST,
    "user" : process.env.MYSQL_USER,
    "password" : process.env.MYSQL_PASS,
    "database" : process.env.MYSQL_DB
};

// Build a Bot!
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Build Commands class 
client.commands = new Collection();
const guild_commands = [];

// Pulls commands from files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    guild_commands.push(command.data.toJSON());
    client.commands.set(command.data.name, command);
}

// This refreshes guild commands which are separate to global commands
const rest = new REST({ version: '9' }).setToken(token);
(async () => {
    try {
        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: guild_commands },
        );
    } catch (error) {
        console.error(error);
    }
})

// Dynamically loads commands, apparently:
// https://discordjs.guide/creating-your-bot/command-handling.html#dynamically-executing-commands
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: "Couldnt run the command soz" })
    }
});

// When Client connects, log it.
client.once('ready', () => {
    console.log(`${client.user.tag} is online.`);
});

// Finally, start the bot and login with the token.
client.login(token);