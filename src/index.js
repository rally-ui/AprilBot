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

client.on("ready", (c) => {
  console.log(`${c.user.tag} is online.`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content === "hello") {
    message.reply("hey!");
  }
});

client.on("messageCreate", (message) => {
  console.log(message);
});



client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  // console.log(interaction)
  if(interaction.commandName=== "embed"){
    const embed = new EmbedBuilder()
    .setTitle("6fd lover")
    .setDescription("willy!!!")
    .setColor('Random')
    .addFields(
    {
      name:"brown munde",
      value : '<@928938275744411678>',
      inline : true,
    },
    {
      name:"he only speaks to elizabethKeen",
      value : '<@679497235125370900>',
      inline : true,
    });
    interaction.reply({embeds: [embed] });
 
  }

  if (interaction.commandName === "hey") {
    interaction.reply("hey");
  }
  if (interaction.commandName === "ping") {
    interaction.reply("<@679497235125370900>");
  }
  if (interaction.commandName === "pings") {
    interaction.reply("u dumb!");
  }
  if (interaction.commandName === "who_is_ra1") {
    interaction.reply("a stupid lazy guy!");
  }
  if (interaction.commandName === "add") {
    const num1 = interaction.options.get("first_num").value;
    const num2 = interaction.options.get("second_num").value;

    interaction.reply(`sum of ${num1} and ${num2} is: ${num1 + num2} `);
  }
});

client.login(process.env.token);
