// Required Libraries
const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
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

// Register commands
const commands = [];
const commandFiles = fs.readdirSync

// Build a Bot!
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Build Ping Interaction
const commands =  [
    new SlashCommandBuilder().setName('penis').setDescription('Replied with penis'),
]
    .map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);
rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() => console.log('Registered command'))
    .catch(console.error);

client.on('interactionCreate', interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('penis');
    }

    console.log(interaction);
});

// When Client connects, log it.
client.once('ready', () => {
    console.log(`${client.user.tag} is online.`);
});

// Finally, start the bot and login with the token.
client.login(token);