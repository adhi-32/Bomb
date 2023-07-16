const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "donate",
    description: "Donate for bot",
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

        const embed = new EmbedBuilder().setDescription(`DONATE OPTION COMING SOON WAIT ` ).setColor(client.color);

        return interaction.editReply({ embeds: [embed] });
    },
};
