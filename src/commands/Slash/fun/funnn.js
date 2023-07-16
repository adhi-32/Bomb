const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "funnn",
    description:  "new type fun",
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
 Alright, here's another joke for you:

Why don't skeletons fight each other?

They don't have the guts!`) .setColor(client.color);

        return interaction.editReply({ embeds: [embed] });
    },
};
