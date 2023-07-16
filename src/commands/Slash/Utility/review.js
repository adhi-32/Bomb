const { EmbedBuilder, ApplicationCommandOptionType } = require("discord.js");
const moment = require("moment");


module.exports = {
    name: "neon-review",
    description: "Tell Bot performance",
    category: "Utility",
    options: [
        {
            name: "review",
            description: "Tell Bot Performance",
            type: ApplicationCommandOptionType.String,
            required: true,
        },
    ],
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
         const embed = new EmbedBuilder().setColor(client.color).setDescription(`**<:emoji_16:1128356761259233472>Thanks For Your Review
I have Recived 💝**`);

            return interaction.editReply({ embeds: [embed] });
    },
};
