const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "fun",
    description: "Get ready for a fun experience",
    category: "fun",
    permissions: {
        bot: [],
        channel: [],
        user: [],
    },
    settings: {
        inVc: false,
        sameVc: false,
        player: false,
        current: false,
        owner: false,
        premium: false,
    },
    run: async (client, interaction) => {
        await interaction.deferReply({ ephemeral: true });

        const embed = new EmbedBuilder().setDescription(`Why don't scientists trust atoms?
Because they make up everything!`) .setColor(client.color);

        return interaction.editReply({ embeds: [embed] });
    },
};
