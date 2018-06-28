require('dotenv').load();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	console.log(JSON.stringify(msg));
	if (msg.content === 'ping') {
		msg.reply('pong');
	}
});

client.login(process.env.DISCORD_BOT_TOKEN);
