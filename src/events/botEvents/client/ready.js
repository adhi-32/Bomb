const { ActivityType , EmbedBuilder } = require("discord.js");
const User = require("../../../settings/models/User.js");
const ms = require('ms');

module.exports.run = async (client) => {
    await client.poru.init(client, {
        shards: client.cluster.info.TOTAL_SHARDS,
        clientName: client.user.username,
        clientId: client.user.id,
    });

  const promises = [
            client.cluster.broadcastEval("this.guilds.cache.size"),
            client.cluster.broadcastEval((c) => c.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)),
        ];

        const results = await Promise.all(promises);

        const servers = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
        const members = results[1].reduce((acc, memberCount) => acc + memberCount, 0);
  

    const users = await User.find();

    await users.forEach(async (user) => {
        client.premium.set(user.Id, user);
    });

    setInterval(async () => {
        
        const status = [
            { type: ActivityType.Listening, name: "NEON | /help | /play" },
            { type: ActivityType.Playing, name: "/play" },
            { type: ActivityType.Watching, name: `${members} Users` },
            { type: ActivityType.Competing, name: `${servers} Servers` },
        ];

        const index = Math.floor(Math.random() * status.length);

        await client.user.setActivity(status[index].name, { type: status[index].type });
    }, 5000);

    console.log(`[INFO] ${client.user.username} is ready with ${client.guilds.cache.size} server`);
  const channel = await client.channels.fetch("1041027911630721154");
  const embed = new EmbedBuilder()
    .setColor("#00ffff")
    .setDescription("Fetching Channel Messages For Status");

  channel.bulkDelete(1);
  channel.send({ embeds: [embed] }).then((msg) => {
    setInterval(() => {
      embed.setAuthor({
        name: `NEON`,
        iconURL: client.user.displayAvatarURL(),
        url: client.config.INVITE,
      });
      embed.setDescription(`**Uptime**\n>  ${ms(client.uptime)}\n\n**Total Server**\n>  ${servers}Servers\n\n**Total Members**\n>  ${members} Members\n\n**Total Channels**\n>  ${client.channels.cache.size} Channels\n\n**Discord.js**\n>  14.11.0\n\n`);
      //embed.setTitle(Cyko-Bot STATUS);
      //embed.setURL(client.config.INVITE);
      embed.setThumbnail(client.user.displayAvatarURL())
      embed.setFooter({text: `Updates in every one minute`});
      embed.setTimestamp(Date.now());
      msg.edit({ embeds: [embed] });
    }
    , 60000)});
};