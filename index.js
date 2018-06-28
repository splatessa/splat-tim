require('dotenv').load();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	console.log(msg);
	msg.reply(msg);
});

client.login(process.env.DISCORD_BOT_TOKEN);
