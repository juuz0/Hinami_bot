const Discord = require("discord.js"); 
const client = new Discord.Client();
const prefix = "t?";
client.on('ready', () => { 
	console.log(`Logged in as ${client.user.tag}!`); 
	client.user.setGame("Bot Wars | Use t?help for help box")});
 client.on('message', msg => { 
 	const args = msg.content.slice(prefix.length).trim().split(/ +/g);
 	const cmd = args.shift().toLowerCase();
 	if(!msg.content.startsWith(conf.prefix) || msg.author.bot) return;
 	if (cmd === 'ping') { msg.channel.send('Pong! Took ' + Math.floor(client.ping) + 'ms'); 
 	}
 	if(cmd === 'avatar' || cmd ==='ava'){
 		let userlist = msg.mentions.users;
 		if(userlist.size == 0) {
 			if(!args[0]){
 		msg.channel.send({embed:new Discord.RichEmbed().setTitle(`${msg.author.username}'s Avatar`).setImage(msg.author.avatarURL.slice(0,-4)+"128")});
 		}
 		else if(args[0]){
 			let url = msg.channel.members.array().filter(mmb=>mmb.user.username==args[0])[0].user.avatarURL;
 				msg.channel.send({embed:new Discord.RichEmbed().setTitle(`${args[0]}'s Avatar`).setImage(url.slice(0,-4)+"128")});
 	   	
   
 		}
 		
 		}
 		
 		userlist.forEach(function (mmb){
 			if(!mmb) msg.reply("Please mention a valid user");
 		msg.channel.send({embed:new Discord.RichEmbed().setTitle(`${mmb.username}'s Avatar`).setImage(mmb.avatarURL.slice(0, -4) + "128")});
      });
      }
      //Math Commands
   if(cmd === 'add') { msg.channel.send("Answer is "+(parseInt(args[0]) + parseInt(args[1])));}
    if(cmd === 'mult') {msg.channel.send("Answer is "+(parseInt(args[0]) * parseInt(args[1])));}
    if(cmd === 'div') { msg.channel.send("Answer is "+(parseInt(args[0]) / parseInt(args[1])));}
    if(cmd === 'sub') { msg.channel.send("Answer is "+(parseInt(args[0]) - parseInt(args[1])));}
    
   if(cmd==='say'){
     msg.delete();
   	msg.channel.send(""+msg.content.split(" ").splice(1).join(" "));}
    
    if(cmd==='ar'){
    	let role = msg.mentions.roles.first();
    	let mmb = msg.mentions.members.first();
    	mmb.addRole(role).then(member=>{msg.channel.send(`Given **${role.name}** role to ${mmb}`); }); }
    if(cmd==='rr'){
    	let role = msg.mentions.roles.first();
    	let mmb = msg.mentions.members.first();
    	mmb.removeRole(role).then(member=>{msg.channel.send(`Removed **${role.name}** role from ${mmb}`); }); }
     
     if(cmd==='talk'){
     	if (args[0] == 'who' && args[1] =='are' && args[2]=='you'){
     		let ans = ["I am bot, else who?","I AM TOUKA","I am a bot created with full love and perserverance by Nikhil","I am girl! And Nikhil's waifu too"];
     		msg.channel.send(ans[Math.floor(Math.random() * ans.length)]);}
     		else if(args[0] == 'Hii' || args[0] == 'Hi' || args[0] == 'Hello'){
     			if (msg.author.id ==397619253739782144){
     				msg.channel.send("Hii Master Nikhil");}
     				else{
     					ans = ["Hello 👋","Hii, do you know where my master is? ","Hii there, I am Touka","My master said there's no problem talking to you. So Hello 👋"]
     					msg.channel.send(ans[Math.floor(Math.random()*ans.length)]);}
     					}
     				
     		
     			else { msg.channel.send("I can't answer these questions now but maybe I can in future :)")}
     			}
     			
     if(cmd ==='spam'){
     	let x = args[0]
     	let w= msg.content.split(" ").slice(2).join(" ")
     	if(!w){msg.channel.send("Please give *SOMETHING* to spam!");	}
     	if(w){if(!x) {msg.channel.send("You dont want to give any number.Ok I will spam 5 times")
     	for(let i=0;i<5;i++){
     		msg.channel.send(`${w}`);}}
     		if(x){
     			for(let i = 0;i<x;i++){
     				msg.channel.send(`${w}`);}}	}
     }
     if(cmd==='kill'){
     	if(msg.author.id==310768205121585153){
     		msg.channel.send({embed:new Discord.RichEmbed().setDescription("*Bot shutdown...*").setColor("0xAE0608")}).then(()=>client.destroy()).then(()=>process.exit()).catch(()=>process.exit());
	
     	}
     	else{
     		msg.channel.send("You aren't my master ");
     	}
     }
     if(cmd==='help'){
     	msg.channel.send({
     		embed:{
     			color:3447003,
     			title:"Touka's Help Box",
     			description:"Prefix is t?",
     			thumbnail:{
     				url:client.user.avatarURL
     			},
     			fields:[{
     				name:"ping!",
     				value :"Pong!"
     			},
     			{
     				name:"avatar or ava <user>",
     				value:"Shows the avatar of the mentioned user. If no user is mentioned shows your avatar in a beautiful embed"
     			},
     			{
     				name:"Math Commands :- add,sub,mult,div",
     				value:"Their names tell their task"
     			},
     			{
     				name:"say <what_to_say>",
     				value:"Says what you want it to say"
     			},
     			{
     				name:"ar and rr",
     				value:"ar => Add a role. rr => Remove a role. Mention a user"
     			},
     			{
     				name:"talk",
     				value:"Touka can talk to you (Under development)"
     			},
     			{
     				name:"spam <times> <word>",
     				value:"Touka can spam! Just give what to spam(word) and how many times to spam(times)"
     			},
     			{
     				name:"help",
     				value:"Shows the help box."
     			}	
     		],
     		timestamp:new Date(),
     		footer:{
     			text:`Requested by ${msg.author.username}`
     		}
     		}
     	});
     }
    
		if (cmd==='eval') {
			if(msg.author.id==310768205121585153){
			try {
				msg.channel.send("```js\n"+eval(msg.content.split(" ").slice(1).join(" "))+"```");
				msg.react("");
			} catch(e) {
				msg.channel.send(`${e.name}: ${e.message}`);
				msg.react("");
			}
		}
		else{
			msg.channel.send("Why should I listen to your order ");
		}
     
     }
     
     		});
client.login(process.env.BOT_TOKEN); 
    
    
    
    
    
