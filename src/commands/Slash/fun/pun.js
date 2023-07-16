const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "pun",
    description: "Get ready for a pun-tastic experience",
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

        const embed = new EmbedBuilder().setDescription(`Did you hear about the restaurant on the moon? Great food, but no atmosphere! `) .setColor(client.color);

        return interaction.editReply({ embeds: [embed] });
    },
};
