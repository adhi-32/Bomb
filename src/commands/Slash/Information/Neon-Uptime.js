const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require("discord.js");
const { supportUrl, inviteUrl, imageUrl } = require("../../../settings/config.js");
const ms = require("pretty-ms");

module.exports = {
    name: "neon-uptime",
    description: "Show information uptime the bot.",
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
        await interaction.deferReply({ ephemeral: false });

        const playingPlayers = client.poru.leastUsedNodes[0].stats.players;
        
        let uptime = await client.uptime;

        let scount = client.guilds.cache.size;
        let mcount = 0;

        client.guilds.cache.forEach((guild) => {
            mcount += guild.memberCount;
        });

        const row = new ActionRowBuilder()
            .addComponents(new ButtonBuilder().setLabel("Support").setURL(supportUrl).setStyle(ButtonStyle.Link))
            .addComponents(new ButtonBuilder().setLabel("Invite").setURL(inviteUrl).setStyle(ButtonStyle.Link));

        const embed = new EmbedBuilder()
            
          .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 2048 }))
            .setDescription(`<:emoji_19:1127959363726880818>**__Neon-Uptime__**`)
            .addFields([

                { name: `**• Uptime**`, value: `\`\`\`${ms(uptime)}\`\`\``, inline: true }
                
            ])
            .setColor(client.color)
            .setFooter({ text: `Thank you for using ${client.user.username}`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setTimestamp();

        return interaction.editReply({ embeds: [embed], components: [row] });
    },
};
