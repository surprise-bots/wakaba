const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mod')
		.setDescription('Moderation options')
        .addSubcommand(subcommand => 
            subcommand
                .setName('kick')
                .setDescription('Pretend to kick a user')
                .addUserOption(option => option.setName('target').setDescription('Mention the user'))
        )
        .addSubcommand(subcommand => 
            subcommand
                .setName('anothersubcommand')
                .setDescription('Just something extra')
                .addUserOption(option => option.setName('target').setDescription('Mention the user'))
        ),
	async execute(interaction) {
		return interaction.reply({ content: `A set of moderations tools. Does nothing on it's own.` });
	},
};