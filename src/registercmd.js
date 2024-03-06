require("dotenv").config();
const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");

const commands = [
  {
    name: "embed",
    description: 'sends an embed!',
  },
  {
    name: "hey",
    description: "replies with hey!",
  },
  {
    name: "ping",
    description: "replies with pong",
  },
  {
    name: "pings",
    description: "pong",
  },
  {
    name: "who_is_ra1",
    description: "none of ur business",
  },
  {
    name: "add",
    description: "adds two numbers", 
    options: [
      {
        name: "first_num",
        description: "the first number",
        type: ApplicationCommandOptionType.Number,
        choices:[
            {
                name:'one',
                value:1,
            },
            {
                name:'two',
                value:2,
            },
            {
                name:'three',
                value:3,
            },
        ],
    
        required: true,

      },

      {
        name: "second_num",
        description: "the second number",
        type: ApplicationCommandOptionType.Number,
        required: true,
      },
    ],
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.token);

(async () => {
  try {
    console.log(`registering slash commands...`);

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.client_id,
        process.env.guild_id
      ),
      { body: commands }
    );
    console.log(`slash command were registered successfully!`);
  } catch (error) {
    console.log(`there was an error: ${error}`);
  }
})();
