// Require the neccersary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = process.env.BOT_TOKEN;

// Create instance of the client
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When client is ready and online, run some code...
client.once('ready', ()=> {
    console.log('Ready!');
});

// Login to Discord using the bots token
client.login(token)