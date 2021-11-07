const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('vc')
        .setDescription('Handles VC behavior')
        .addStringOption( option =>
            option.setName('category')
                .addChoice('new', 'new')
                .addChoice('hide', 'hide')
        ),
    async execute(interaction) {
        if (interaction.command === 'new') {
            await interaction.reply('new');
        }

        if (interaction.command === 'hide') {
            await interaction.reply('hide');
        }

        await interaction.reply(`I saw ${interaction.command.name}`);
    }
};