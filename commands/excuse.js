const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('excuse')
        .setDescription('Provides a totally real excuse for IT problems.'),
    async execute(interaction) {
        console.log("Ran excuse.js");
        con.query("SELECT saying FROM bofh_sayings ORDER BY RAND() LIMIT 1", (err, row) => {
            retres = row;
        });

        return interaction.reply(retres);
    },
};