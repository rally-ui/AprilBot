require("dotenv").config();
const {
  EmbedBuilder,
  Client,
  IntentsBitField,
  GatewayIntentBits,
  Integration,
  
} = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const roles=


client.on("ready", (c) => {
  console.log(`${c.user.tag} is online.`);
});

client.login(process.env.token);
