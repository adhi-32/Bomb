const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "neon-support",
    description: "Get Neon Support link",
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
      
          

        const embed = new EmbedBuilder().setDescription(`<:support:1107331275750129786>**__SUPPORT LINK__**
**Click the support** | [Support](https://discord.gg/VNdnCk6npu)`).setColor(client.color);

        return interaction.editReply({ embeds: [embed] });
    },
};
