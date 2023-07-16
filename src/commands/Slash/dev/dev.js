const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "dev",
    description: "Neon developer",
    category: "dev",
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

        const embed = new EmbedBuilder().setDescription(`<:emoji_15:1127641913122639942>**__DEVELOPER__**
[bomb_xd#0000](https://discord.com/users/978133070387478639)        `).setColor(client.color);

        return interaction.editReply({ embeds: [embed] });
    },
};