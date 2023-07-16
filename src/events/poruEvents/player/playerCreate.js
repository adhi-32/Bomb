const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, InteractionType } = require("discord.js");
module.exports.run = async (client, player) => {
   
const bomb = client.channels.cache.get('1128870460801691688');

   const log = new EmbedBuilder()
    .setDescription(`Player Created from (${player.guildId})`)
      
       bomb.send({embeds:[log]});
};
