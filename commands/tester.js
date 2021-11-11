const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Testing Commands'),
	async execute(interaction) {
        return interaction.reply({ content: `Purely for testing stuff.` });
	},
};