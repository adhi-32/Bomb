const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('serverlist')
    .setDescription('Get the list of servers the bot is in'),
  async execute(interaction) {
    // Fetch all the guilds (servers) the bot is in

  },
}; 