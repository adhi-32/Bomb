const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "vazha",
    description: "verity 😁",
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

        const embed = new EmbedBuilder().setDescription(`
**__FOR FUN__**
Hey Vazha, you're an awesome and fun person to be around! Keep spreading joy and laughter wherever you go. You rock!🤣 `) .setColor(client.color);

        return interaction.editReply({ embeds: [embed] });
    },
};
