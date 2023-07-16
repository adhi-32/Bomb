const {
    EmbedBuilder,
    ActionRowBuilder,
    StringSelectMenuBuilder,
    StringSelectMenuOptionBuilder,
    ButtonBuilder,
    ButtonStyle,
} = require("discord.js");
const { readdirSync } = require("fs");
const { supportUrl, inviteUrl, imageUrl } = require("../../../settings/config.js");

module.exports = {
    name: "help",
    description: "Display all commands of the bot.",
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

        const row2 = new ActionRowBuilder()
            .addComponents(new ButtonBuilder().setLabel("🧰Support").setURL(supportUrl).setStyle(ButtonStyle.Link))
            .addComponents(new ButtonBuilder().setLabel("💌Invite").setURL(inviteUrl).setStyle(ButtonStyle.Link));

        const categories = readdirSync("./src/commands/Slash/");

        const embed = new EmbedBuilder()
            .setAuthor({
                name: `${interaction.guild.members.me.displayName} Help Command!`,
                iconURL: interaction.guild.iconURL({ dynamic: true }),
            })
            .setColor(client.color)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 2048 }))
     .setDescription(`**<a:premium:1099579418873167962>__HEY GUYS IAM NEON__
A Best Quality Diacord Music Bot.
Support Spotify, SoundCloud Apple music etc..

<a:discord:1009843837088301117>__NEON CATEGORY__
<:music:1107335646013562962>MUSIC
<:util:1107331301989679125>UTILITY
<:info:1107331290161741864>INFORMATION
<:dev:1107334046901620806>DEV
<a:fun:1128659166962130985>FUN
<:tick:1107331304325926922>MOTIVATION**`)
            .setFooter({
                text: `© ${client.user.username} | Total Commands: ${client.slashCommands.size}`,
                iconURL: client.user.displayAvatarURL({ dynamic: true }),
            })
            .setTimestamp();

        const row = new ActionRowBuilder().addComponents([
            new StringSelectMenuBuilder()
                .setCustomId("help-category")
                .setPlaceholder(`Select Menu Category Commands`)
                .setMaxValues(1)
                .setMinValues(1)
                .setOptions(
                    categories.map((category) => {
                        return new StringSelectMenuOptionBuilder().setLabel(category).setValue(category);
                    })
                ),
        ]);

        interaction.editReply({ embeds: [embed], components: [row, row2] }).then(async (msg) => {
            let filter = (i) => i.isStringSelectMenu() && i.user && i.message.author.id == client.user.id;

            let collector = await msg.createMessageComponentCollector({
                filter,
                time: 90000,
            });

            collector.on("collect", async (m) => {
                if (m.isStringSelectMenu()) {
                    if (m.customId === "help-category") {
                        await m.deferUpdate();

                        let [directory] = m.values;

                        const embed = new EmbedBuilder()
                            .setAuthor({
                                name: `${interaction.guild.members.me.displayName} Help Command!`,
                                iconURL: interaction.guild.iconURL({ dynamic: true }),
                            })
                            .setDescription(
                                `These are all available commands for this category to use. \**❯ ${
                                    directory.slice(0, 1).toUpperCase() + directory.slice(1)
                                }:**\n${client.slashCommands
                                    .filter((c) => c.category === directory)
                                    .map((c) => `\`${c.name}\` : *${c.description}*`)
                                    .join("\n")}`
                            )
                            .setColor(client.color)
                            .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 2048 }))
                            .setFooter({
                                text: `© ${client.user.username} | Total Commands: ${
                                    client.slashCommands.filter((c) => c.category === directory).size
                                }`,
                                iconURL: client.user.displayAvatarURL({ dynamic: true }),
                            })
                            .setTimestamp();

                        msg.edit({ embeds: [embed] });
                    }
                }
            });

            collector.on("end", async (collected, reason) => {
                if (reason === "time") {
                    const timed = new EmbedBuilder()
                        .setAuthor({
                            name: `${interaction.guild.members.me.displayName} Help Command!`,
                            iconURL: interaction.guild.iconURL({ dynamic: true }),
                        })
                        .setDescription(
                            `**Thank For Using Neon**`
                        )
                        .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 2048 }))
                        .setColor(client.color)
                        .setFooter({
                            text: `© ${client.user.username} | Total Commands: ${client.slashCommands.size}`,
                            iconURL: client.user.displayAvatarURL({ dynamic: true }),
                        })
                        .setTimestamp();

                    msg.edit({ embeds: [timed], components: [row2] });
                }
            });
        });
    },
};
