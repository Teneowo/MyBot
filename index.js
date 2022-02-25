const config = require('./config.json');
const Discord = require('discord.js');

//const client = new Discord.Client();
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"]
});



client.once('ready', () => {
    console.log('Vestige is online!');
});



console.log(config.token);

client.login(config.token);
//client.login('OTQ2ODM5MTIyMzY5MjAwMTY4.Yhkipg.IKbi9b-7iqv1Nj3TBRggkaqu8SY');