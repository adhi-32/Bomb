const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "premiumusers",
    description: "Check premium users",
    category: "Premium",
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

        const embed = new EmbedBuilder().setDescription(`<:emoji_18:1127937158313951282>**__PREMIUM USERS__
[omega8881#0000](https://discord.com/users/765089842890932234)  **`).setColor(client.color);

        return interaction.editReply({ embeds: [embed] });
    },
};
