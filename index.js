const config = require('./config.json');
const Discord = require('discord.js');

const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"]
});



client.once('ready', () => {
    console.log('Vestige is online!');
});




client.login(config.token);