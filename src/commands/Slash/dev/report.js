const { EmbedBuilder, ApplicationCommandOptionType } = require("discord.js");
const moment = require("moment");


module.exports = {
    name: "report",
    description: "If you any bugs Report that here",
    category: "dev",
    options: [
        {
            name: "report",
            description: "Report in here",
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
         const embed = new EmbedBuilder().setColor(client.color).setDescription(`**Sorry for the inconvenience, and thanks for reporting the issues!\nYour report now is reviewed by our staff**`);

            return interaction.editReply({ embeds: [embed] });
    },
};
