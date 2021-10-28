const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
var config = require('./config');

const commands = [{
    name: 'ping',
    description: 'Replies with pong!'
}];

const rest = new REST({ version: '9' }).setToken('token');

(
    async () => {
        try {
            console.log('Started refresshing application (/) commands ');

            await rest.put(
                Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
                { body: commands },
            );

            console.log('Successfully reloaded application (/) commands. ');
        } catch (error) {
            console.error(error);
        }
    }
)();

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUIILDS] });

client.on('ready', () =>{
    console.log('Logged in as ${client.user.tag}');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
});

client.login(config.bot_token);