const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('vc')
        .setDescription('Handles VC behavior'),
    async execute(interaction) {
        await interaction.reply('Um...')
    }
};