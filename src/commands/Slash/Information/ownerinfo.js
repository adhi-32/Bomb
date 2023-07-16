const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "owner-info",
    description: "Neon Owner",
    category: "Information",
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

        const embed = new EmbedBuilder().setDescription(`<:emoji_14:1127621045508124772>**__OWNER__**
[bomb_xd#0000](https://discord.com/users/978133070387478639)        `).setColor(client.color);

        return interaction.editReply({ embeds: [embed] });
    },
};