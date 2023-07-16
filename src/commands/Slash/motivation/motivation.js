const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "motivation",
    description: "Check new motivation",
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

        const embed = new EmbedBuilder().setDescription(`Here are a few suggestions to boost your motivation:

1. Set Clear Goals: Clearly define what you want to achieve and create specific, achievable goals.

2. Find Your Why: Understand the reasons behind your goals and connect with your deeper motivations.

3. Break It Down: Break your goals into smaller, manageable tasks to make them more attainable and less overwhelming.

4. Seek Inspiration: Surround yourself with positive and inspiring people, stories, or quotes that uplift and motivate you.

5. Celebrate Successes: Acknowledge and celebrate your achievements along the way, no matter how small they may be.

6. Stay Positive: Maintain a positive mindset and focus on progress rather than perfection. Embrace challenges as learning opportunities.

7. Take Care of Yourself: Prioritize self-care by getting enough rest, eating well, exercising, and practicing mindfulness or relaxation techniques.

8. Visualize Success: Use visualization techniques to imagine yourself achieving your goals and experiencing the satisfaction that comes with it.

Remember, motivation can fluctuate over time, so it's important to nurture and maintain it consistently.`).setColor(client.color);

        return interaction.editReply({ embeds: [embed] });
    },
};
