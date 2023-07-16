const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "football-motivation",
    description: "Check Football motivation",
    category: "motivation",
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

        const embed = new EmbedBuilder().setDescription(`Sure, here's some football motivation for you:

1. "The difference between ordinary and extraordinary is that little extra." - Jimmy Johnson

2. "Hard work beats talent when talent doesn't work hard."

3. "Football is not just a game, it's an art, a passion, a way of life. Give it your all and leave nothing on the field."

4. "Pain is temporary, but victory is forever. Push through the challenges and keep chasing your dreams."

5. "Success isn't given, it's earned. Put in the effort, stay dedicated, and success will come."

6. "Believe in yourself and your abilities. With determination and perseverance, you can achieve anything."

7. "Embrace the pressure, thrive in the competition. Rise above the challenges and prove your worth on the field."

8. "Every setback is an opportunity for a comeback. Learn from your failures and use them as stepping stones towards success."

Remember to stay focused, train hard, and give it your all. The journey may be tough, but the rewards are worth it. Keep pushing forward and never give up on your football dreams.`).setColor(client.color);

        return interaction.editReply({ embeds: [embed] });
    },
};
