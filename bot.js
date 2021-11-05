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
    "database" : process.env.MYSQL_DB,
    insecureAuth : true
};

// Build a Bot!
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Create the MySQL connection
let con = createConnection(mycnf);
con.connect(err => {
    // Console log if there is an error
    if (err) return console.log(err);
    console.log('MySQL has been connected');
});



// Create a collection of commands, then pull commands from ./commands folder
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

// Log when bot is finally online
client.once('ready', () => {
    console.log(`${client.user.tag} ready!`);
});

// I'm not too sure what's going on below. Will need to re-assess when I learn more node.
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});

// Finally, start the bot and login with the token.
client.login(token);