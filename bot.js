const Discord = require("discord.js");
const client = new Discord.Client();

var quotes = [];

function retrieveQuotes() {
	
	var reader = require("fs");
	var text = reader.readFileSync("./quotes.txt").toString('utf-8');
	var textByLine = text.split("\n");
	
	for (i = 0; i < textByLine.length; i++) {
		quotes.push(textByLine[i]);
	}

}

function returnRandomQuote() {
	
	return quotes[Math.round(Math.random() * (quotes.length - 1))];
	
}

client.on("ready", () => {
	
	console.log('Bot initialized');
	
	// retrieveQuotes();
	
	client.user.setUsername("Weiberreisser");
	client.user.setActivity('against Embrace', {type: 'PLAYING'});
	
});

client.on("message", async message => {
	
	if(message.author.bot) return;
	if(message.content.indexOf(process.env.PREFIX) !== 0) return;
	
	const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	
	if (command === "backup") {
		// message.channel.send(returnRandomQuote());
	}
	
});

//client.login(config.token);
client.login(process.env.BOT_TOKEN);
