const Discord = require('discord.js');
const { Client } = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
var prefix = ".";
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");
client.cooldowns = new Discord.Collection();
["command", "events"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
console.log("idk")
})

client.on("guildMemberAdd", member => {
    var nonverified = member.guild.roles.find(role => role.name === '🌟┃Member');
    member.addRole(nonverified);
    member.guild.channels.get('866810962329075712').send({embed: {
  color: 3447003,
  title: "⚡ Thunder",
  description: "Welcome " + member + " to the ⚡Thunder!",
  fields: [{
    name: "Read <#866810952162213898>",
    value: "for buying my crashing bot"
   }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
  text: "© NAME OF SERVER 2018 - 2019"
  }
  }});
  });

client.login("ODY2NzkzMDE4NjQ0NjI3NTI3.YPXt5w.rpU37I0d5j8hO9PplIxHmIDqcak"); // e deleted so dont waste ur time lol, discord noticed my token got in internet and resetted it
