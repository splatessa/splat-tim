require('dotenv').load();

const DialogFlow = require('./apis/dialogflow');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
	if (message.author.bot) return;

	console.log(`A: ${message.content}`);
	DialogFlow.parse(message.content).then(reply => {
		console.log(`B: ${reply}`);
		message.reply(reply);
	});
});

client.login(process.env.DISCORD_BOT_TOKEN);
