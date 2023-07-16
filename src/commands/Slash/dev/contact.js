const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "contact",
    description: "Buy premium For contact",
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

        const embed = new EmbedBuilder().setDescription(`**<:emoji_17:1127764452725510184>CONTACT EMAIL** :- bombsir1010@gmail. com
<:emoji_14:1127621045508124772>OWNER ID :- bomb_xd#0000` ).setColor(client.color);

        return interaction.editReply({ embeds: [embed] });
    },
};
