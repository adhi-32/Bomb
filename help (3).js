const { ChatInputCommandInteraction, SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');
const ExtendedClient = require('../../../class/ExtendedClient');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Neon Help Menu'),
    /**
     * @param {ExtendedClient} client 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {[]} args 
     */
    run: async (client, interaction, args) => {
        const totalGuilds = client.guilds.cache.size; // Get the total number of guilds the bot is in 
        const username = interaction.user.username;
        const userMention = interaction.user.toString();

        const embed = new EmbedBuilder()
            
       .setColor('#FFFF00')
            .setDescription(`
 <a:premium:1099579418873167962> **Hey Iam Neon ${userMention} Thanks For Using Me**

<:emoji_52:1153697608695558315>**About Me **
> <:emoji_53:1153338990167077015> **An Advanced Moderation Bot for Discord. Invite me to your server and experience the power of effective moderation.**
<:emoji_55:1157968829352259674>**Command Categorys**
> <:emoji_52:1153336988083171360> **Info**
> <:emoji_52:1153334879929507850> **Moderation**
> <:emoji_50:1153333821954076712> **Utility**
<:emoji_54:1153341006121554012>**__Links__**
•[Support Server](https://discord.gg/VNdnCk6npu)• [Invite](https://wait)`)
    .setImage(`
https://media.discordapp.net/attachments/1157916575861575691/1159141842449875045/20231004_202525.png?ex=651ece77&is=651d7cf7&hm=3ce376fc67c94a45385c176165790e121051c39745e74887e7e2e83bc524d197&`)
       .setFooter({

  text: `©NEON | Made By Bomb`,

  iconURL: client.user.displayAvatarURL({ dynamic: true }),

})
.setAuthor({

  name: 'Neon Help Menu', // Empty string to remove the name

  iconURL: client.user.avatarURL()

})
 .setThumbnail(client.user.displayAvatarURL());


        const selectMenu = new StringSelectMenuBuilder()
            .setCustomId('example-select')
            .setPlaceholder(`Select a category`)
            .addOptions(
                { label: 'info', value: 'info' },
                { label: 'moderation', value: 'Moderation' },
                { label: 'utility', value: 'Utility' },
            );

        const actionRow = new ActionRowBuilder()
            .addComponents(selectMenu);

        await interaction.reply({
          
            embeds: [embed],
            components: [actionRow]
        });

    }
};
/**
 * Copyright (c) [2023] [BOMB]
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * Bot Name: Neon
 */
