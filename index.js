const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const { token } = require('./config.json');
client.on('ready', () => {
	console.log(`'${client.user.tag}' est en ligne.`);
	// Status //
	client.user.setActivity('des tutos JavaScript', { type: 'WATCHING' });
	// Status //
});

// Biblio
var sad_gifs = [
'https://media.giphy.com/media/3o6wrvdHFbwBrUFenu/giphy.gif',
'https://media.giphy.com/media/l1KVaj5UcbHwrBMqI/giphy.gif',
'https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif',
'https://media.giphy.com/media/ULKnZ7hW07rlS/giphy.gif',
'https://media.giphy.com/media/zHGXhFJCVCbD2/giphy.gif',
'https://media.giphy.com/media/JEVqknUonZJWU/giphy.gif',
'https://media.giphy.com/media/fzFiKLW1BFsaY/giphy.gif',
'https://media.giphy.com/media/Y4z9olnoVl5QI/giphy.gif',
'https://media.giphy.com/media/eDQSdixgEvsZ2/giphy.gif',
'https://media.giphy.com/media/McNHek8WfyEA8/giphy.gif',
'https://media.giphy.com/media/RhHjRzVRuqjHq/giphy.gif',
'https://media.giphy.com/media/8w68TkeqzDnLa/giphy.gif',
'https://media.giphy.com/media/dJYoOVAWf2QkU/giphy.gif'
];

var happy_gifs = [
'https://media.giphy.com/media/LML5ldpTKLPelFtBfY/giphy.gif',
'https://media.giphy.com/media/JWGgsu82QDoEE/giphy.gif',
'https://media.giphy.com/media/JXibbAa7ysN9K/giphy.gif',
'https://media.giphy.com/media/mEsOq022kLlDO/giphy.gif',
'https://media.giphy.com/media/33OrjzUFwkwEg/giphy.gif',
'https://media.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.gif',
'https://media.giphy.com/media/1EnVAKJGFjoM8/giphy.gif',
'https://media.giphy.com/media/8WJw9kAG3wonu/giphy.gif',
'https://media.giphy.com/media/tCSFvcIyz7qk8/giphy.gif',
'https://media.giphy.com/media/JMotSbZTCEWl2/giphy.gif'
];

var pingu_gifs = [
'https://media.giphy.com/media/TVPJNp47j5EA0/giphy.gif',
'https://media.giphy.com/media/iDPv54rvXkkA8/giphy.gif',
'https://media.giphy.com/media/QBC5foQmcOkdq/giphy.gif',
'https://media.giphy.com/media/gfJtgKZrBfXP2/giphy.gif',
'https://media.giphy.com/media/eNq8xHnkD6mnLTqTws/giphy.gif',
'https://media.giphy.com/media/VhXqTSbvMGpoY/giphy.gif',
'https://media.giphy.com/media/ku5EcFe4PNGWA/giphy.gif'
];

var horny_gifs = [
'https://media.giphy.com/media/YohxNt9aq41Fe/giphy.gif',
'https://media.giphy.com/media/3o7TKLTzmewf1Sa2u4/giphy.gif',
'https://media.giphy.com/media/sXR1Lyui5SEmI/giphy.gif',
'https://media.giphy.com/media/l1ugcCk6L8ee6UINi/giphy.gif',
'https://media.giphy.com/media/q8TEi7UTxas92/giphy.gif',
'https://media.giphy.com/media/im8CExGQW908U/giphy.gif',
'https://media.giphy.com/media/ScMCHe4FAMwso/giphy.gif',
'https://media.giphy.com/media/xT0GqIMccWXv2rO1Zm/giphy.gif',
'https://media.giphy.com/media/13JhbbAGl3iK3e/giphy.gif',
'https://media.giphy.com/media/nj9C58RS0viWA/giphy.gif',
'https://media.giphy.com/media/xYqKJsgR6qZFK/giphy.gif'
];

var fesses_gifs = [
'https://tenor.com/38Lu.gif',
'https://tenor.com/9Rbi.gif'
];

var insultes = [
"tu sais? moi j’aime beaucoup le port du masque, ça camoufle les effluves de pourriture qui émanent de ta bouche dès que tu l'ouvres.",
"tu es tellement intelligent que tu pourrais être chroniqueur chez Touche pas à mon poste.",
'bah alors, on est nul à chier ?',
"tu es dispo le soir ? J'aimerais que tu viennes me parler, ça me permettrait de m'endormir plus vite.",
"peut-être que tu serais moins con si tes parents étaient cousins au deuxième degré et pas au premier.",
"on t’a déjà dit que tu étais une personne incroyablement commune ?",
"tu es aussi brillant qu’un trou noir, et au moins deux fois plus lourd.",
"tu n’es vraiment pas assez beau/belle pour pouvoir te permettre d’être aussi bête.",
"est-ce que tu te rends compte que les gens ne font que te tolérer ?",
"toutes les personnes qui ont dit un jour qu’elles t’aimaient se sont trompées.",
"tu vois, là, ce que tu es en train de faire ? C’est exactement pour cela que tu n’as pas d’amis."
];
// Biblio

client.on('message', msg => {
	// Variables
	//var collect_msg_5min = new Discord.MessageCollector(msg.channel,msg.createdAt>Date.now()-300000);
	let msg_search = msg.content.toLowerCase();
	let bot_prefix = '!f'+' ';
	var random_gif;
	// Variables
	
	
	if (msg.content.slice(0,bot_prefix.length) === bot_prefix) {
		let msg_cmd =msg.content.slice(bot_prefix.length).trim().toLowerCase();
		switch (true) {
			case msg_cmd.includes('help'):
				msg.channel.send('```Liste des commandes (!f) :\n\thelp\n\tspam [message à spam]\n\n\n'+
				'Liste des ordres (Nomme/Tag le bot et donne une instruction, pas d\'ordre ou de position obligatoire) :\n\tInsulte une ou plusieurs personnes //"insulte"+[Tag]\n\tSalut le bot\n\tCommande un Uber (spécial)\n\n\n'+
				'Réactions Dynamiques :\n\t"sad"\n\t"happy"\n\t"nut nut"\n\t"horny"\n\t"horny jail"\n\t"fesses"```')
				.then(Console_Log_Message_Send(msg.author.tag, msg.guild, msg.channel.name));
				break;
			case msg_cmd.includes('spam'):
				msg_spam = msg.content.slice(bot_prefix.length).trim().slice(4);
				if (msg_spam.length > 0){
					for ( let i=0 ; i<10 ; i++){
						msg.channel.send(msg_spam);
					}
				}else {
					msg.channel.send(`Précise le message à spam ${msg.author.toString()}.`);
				}
				Console_Log_Message_Send(msg.author.tag, msg.guild, msg.channel.name);
				break;
			case msg_cmd.includes('save'):
				//msg.channel.send(collect_msg_5min.collected);
				break;
			default:
				msg.reply('Commande introuvable')
				.then(Console_Log_Message_Send(msg.author.tag, msg.guild, msg.channel.name));
				break;
		}
	}
	
	// Reactions Dynamiques
	if (msg.author!=client.user){
		switch (true) {
			case RegExp('\\bsad\\b').test(msg_search):
				random_gif =  Math.floor(Math.random() * sad_gifs.length);
				let sad_gif = new Discord.MessageAttachment(sad_gifs[random_gif]);
				msg.channel.send(sad_gif);
				msg.react('😢');
				Console_Log_Message_Send(msg.author.tag, msg.guild, msg.channel.name);
				break;
				
			case RegExp('\\bhappy\\b').test(msg_search):
				random_gif =  Math.floor(Math.random() * happy_gifs.length);
				let happy_gif = new Discord.MessageAttachment(happy_gifs[random_gif]);
				msg.channel.send(happy_gif);
				msg.react('😄');
				Console_Log_Message_Send(msg.author.tag, msg.guild, msg.channel.name);
				break;
			case RegExp('\\bnut nut\\b').test(msg_search):
				random_gif =  Math.floor(Math.random() * pingu_gifs.length);
				let pingu_gif = new Discord.MessageAttachment(pingu_gifs[random_gif]);
				msg.channel.send(pingu_gif);
				msg.react('🐧');
				Console_Log_Message_Send(msg.author.tag, msg.guild, msg.channel.name);
				break;
			case RegExp('\\bhorny jail\\b').test(msg_search):
				msg.channel.send('https://tenor.com/bkKml.gif');
				Console_Log_Message_Send(msg.author.tag, msg.guild, msg.channel.name);
				break;
			case RegExp('\\bhorny\\b').test(msg_search):
				random_gif =  Math.floor(Math.random() * horny_gifs.length);
				let horny_gif = new Discord.MessageAttachment(horny_gifs[random_gif]);
				msg.channel.send(horny_gif);
				msg.react('🔞');
				Console_Log_Message_Send(msg.author.tag, msg.guild, msg.channel.name);
				break;
			case RegExp('\\bfesses\\b').test(msg_search) || RegExp('\\bfesse\\b').test(msg_search):
				random_gif =  Math.floor(Math.random() * fesses_gifs.length);
				msg.channel.send(fesses_gifs[random_gif]);
				Console_Log_Message_Send(msg.author.tag, msg.guild, msg.channel.name);
				break;
				
			case RegExp('\\bjavel\\b').test(msg_search):
				msg.channel.send("https://tenor.com/view/real-drinks-drink-clorox-cat-gif-11629362");
				Console_Log_Message_Send(msg.author.tag, msg.guild, msg.channel.name);
				break;
			default:break;
		  
		  
		}
	}
	
	// appel du bot
	if (msg.author!=client.user && (/**/msg.mentions.has(client.user) || msg_search.includes('fox legacy')/**/)){
		switch (true){
			case (/**/msg_search.includes('bonjour') || msg_search.includes('salut') || msg_search.includes('salutations')/**/):
				msg.channel.send(`Salutations ${msg.author.toString()}.`)
				.then(Console_Log_Message_Send(msg.author.tag, msg.guild, msg.channel.name));
				break;
			case msg_search.includes('insulte'):
				if (msg.mentions.users.toString().length > 0){
					msg.mentions.users.forEach((k , v) => {
						let random_insulte =  Math.floor(Math.random() * insultes.length);
						if (k!=client.user){
							msg.channel.send(`${k}, ${insultes[random_insulte]}`)
							.then(Console_Log_Message_Send(msg.author.tag, msg.guild, msg.channel.name));
						}
					})
				}
				break;
			case msg_search.includes('uber bite') || msg_search.includes('uber sex') :
				msg.channel.send('Nous avons bien reçu votre demande, un taxi à être envoyé chez Florian Pédeprat pour vous le livrer dans les plus brefs délais.\nMerci pour votre confiance en nos services')
				.then(Console_Log_Message_Send(msg.author.tag, msg.guild, msg.channel.name));
				break;
			default:
				msg.channel.send(`Oui ?`);
				Console_Log_Message_Send(msg.author.tag, msg.guild, msg.channel.name);
				
		}
		
	}
});

/*
 * setTimeout(function () {
 *  var guilds_list=bot_get_guilds();
 *  console.log(guilds_list);
 *  var channels_list=bot_get_channels_from_guild("458613220870193162");
 *  console.log(channels_list);
 * },1000)
 */

function Console_Log_Message_Send(author, guild, channel) {
	console.log(`Message envoyé à "${author}" sur "${guild} (${channel})"`);
}

//guild = "458613220870193162" channel = "843240769279098890"//


function bot_send_message_to_channel(channel_id, message) {
	client.guilds.cache.get(channel_id).send(message);
}

function bot_get_channels_from_guild(guild_id) {
	let channels = {name:[],id:[]};
	let ccc = client.channels.cache;
	ccc.forEach((j, i) => {
		if(ccc.get(i).guild == guild_id){
			channels.name[j]=ccc.get(i).name;
			channels.id[j]=i;
		}
	});
	return channels;
}

function bot_get_guilds() {
	let guilds = {name:[],id:[],};
	client.guilds.cache.forEach((j, i) => {
		guilds.name[j]=client.guilds.cache.get(i).name;
		guilds.id[j]=i;
	});
	return guilds;
}

function display_guilds() {
	
	for (var i = 0 ; i < display_guilds.length ; i++){
		document.getElementById('guilds').innerHTML+=display_guilds.name[i];
	}
}


client.login(token);
