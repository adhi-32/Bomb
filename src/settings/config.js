require("dotenv").config();

module.exports = {
    // BOT DETAILS
    token: process.env.TOKEN || " ", // your bot token
    prefix: process.env.PREFIX || "U", // your bot prefix "for owner message command"
    color: process.env.EMBED_COLOR || " ", // your embeded hex color
    owner: process.env.OWNER_ID || " ", // your bot Owners ID
    guildLogs: process.env.GUILD_LOGS || " ", // your server join left logs Channel ID
    leaveTimeout: process.env.LEAVE_TIMEOUT || "60000", // set leave TimeOut when bot was alone 1000 = 1sec
    disableYouTube: parseBoolean(process.env.DISABLE_YOUTUBE || "false"), // ""true/false" | Enable/disable YouTube feature. Disabling this will make "autoplay" command useless!!!

    // PORU DETAILS
    playSource: process.env.PLAY_SOURCE || "ytsearch", // recomended using "ytmsearch". You can change this to: "ytsearch" / "scsearch" / "spotify".
    poruOptions: {
        defaultPlatform: process.env.DEFAULT_SOURCE || "ytmsearch", // recomended using "ytmsearch". You can change this to: "ytsearch" / "scsearch" / "spsearch (need Lavasrc plugin)".
        clientID: process.env.SPOTIFY_ID || " ", // your Spotify Client ID
        clientSecret: process.env.SPOTIFY_SECRET || " ", // your Spotify Client Secret
        reconnectTries: 5, // total attemps to try if reconnect failed. you can change it to "Infinity" for unlimited attemps.
        playlistLimit: 2, // 1 = 100 tracks
        albumLimit: 2, // 1 = 50 tracks
        artistLimit: 2, // 1 = 50 tracks
        searchMarket: "us",
    },
    nodes: [
        {
            name: process.env.NODE_NAME1 || "Uo Music", // lavalink node name (anything you want)
            host: process.env.NODE_HOST1 || "", // lavalink host
            port: parseInt(process.env.NODE_PORT1 || "20001"), //lavalink port
            password: process.env.NODE_PASSWORD1 || "", //lavalink pass/auth
            secure: parseBoolean(process.env.NODE_SECURE1 || "false"), //lavalink secure "true/false"
            regions: process.env.NODE_REGIONS1 || ["singapore", "japan", "india"], // available lavalink regions ["singapore", "sydney", "japan", "hongkong", "india", "us-central", "us-east", "us-south", "us-west", "brazil", "russia", "rotterdam", "southafrica"]
        }
    ],

    // LINK DETAILS
    mongoUri: process.env.MONGO_URI || " ", // your MongoDB Url
    supportUrl: process.env.SUPPORT_URL || "", // your Support Server Link
    inviteUrl: process.env.INVITE_URL || " ", // your Bot Invite Link
    imageUrl: process.env.IMAGE_URL || "https://cdn.discordapp.com/icons/1040974990473973851/22715c4a39859c4816f8c31a8d218023.png?size=4096", // your Bot Banner Imange Link to use on "help" & "about" command
};

function parseBoolean(value) {
    if (typeof value === "string") {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
