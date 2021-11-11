const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Testing Commands'),
	async execute(interaction) {
        if (!args.length) {
            return interaction.reply({ content: `You didn't provide an argument` });
        } else {
            return interaction.reply({ content: `You said: ${args}` });
        }
	},
};