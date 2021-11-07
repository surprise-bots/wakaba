const { SlashCommandBuilder } = require('@discordjs/builders');
const { createConnection } = require('mysql');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('excuse')
        .setDescription('Provides a totally real excuse for IT problems.'),
    async execute(interaction) {
        console.log("Ran excuse.js");

        // Create the MySQL connection
        let con = createConnection(mycnf);
        con.connect(err => {
            // Console log if there is an error
            if (err) return console.log(err);
            console.log('MySQL has been connected');
        });

        // Run the query
        con.query("SELECT saying FROM bofh_sayings ORDER BY RAND() LIMIT 1", (err, row) => {
            retres = row;
        });
    
        // Utilize the return
        return interaction.reply(retres);
    },
};