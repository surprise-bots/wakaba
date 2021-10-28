const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
// const config = require('./config');

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
                Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
                { body: commands },
            );

            console.log('Successfully reloaded application (/) commands. ');
        } catch (error) {
            console.error(error);
        }
    }
)();

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () =>{
    console.log('Logged in as ${client.user.tag}');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
});

client.login(process.env.BOT_TOKEN);