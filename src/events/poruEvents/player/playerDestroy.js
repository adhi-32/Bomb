const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, InteractionType } = require("discord.js");
const Reconnect = require("../../../settings/models/247.js");

module.exports.run = async (client, player) => {
    const channel = client.channels.cache.get(player.textChannel);
    if (!channel) return;

    // If 247 activated, this will auto connect voice when bot disconnected/destoryed
    const data = await Reconnect.findOne({ guild: player.guildId });

    if (data && Date.now() >= data.time) {
      
   const nop = client.channels.cache.get('1129250108626698331');  await data.delete();

        const bomb = new EmbedBuilder()
        .setDescription(`247 has been disabled from (${player.guildId})`)
        nop.send({embeds:[bomb]});
    } // Disable this "if" when 247 command settings premium is set to "false".

    if (data) {
        const voices = client.channels.cache.get(data.voice);

        if (player.state !== "DESTROYING") {
            await client.poru.createConnection({
                guildId: data.guild,
                voiceChannel: data.voice,
                textChannel: data.text,
                region: voices.rtcRegion || undefined,
                deaf: true,
            });
        }
    }
    
const neon = client.channels.cache.get('1129250108626698331');
   const log = new EmbedBuilder()
   
.setDescription(`Player Destroyed from (${player.guildId})`)
neon.send({embeds:[log]});

};
