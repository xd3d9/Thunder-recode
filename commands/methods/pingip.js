const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const ping = require('ping');
module.exports = {
    name: "pingip",
    category: "methods",
    description: "amogusnt",
    run: async (client, message, args) => {
      try{
const noip = new Discord.MessageEmbed()
      .setColor("EEFF00")
	.setTitle('⚡ Thunderye')
	.setDescription("No ip provided!")
	.setFooter('© Thunder - 2021')
	.setThumbnail("https://i.hizliresim.com/ivrg2py.gif")
var ip = args[0];
var port = args[1];
if (!ip) return message.channel.send(noip);
args.forEach(function(host){
    ping.sys.probe(host, function(isAlive){
        var msg = isAlive ? '✅ ' + host + ' is alive!' : '❌ ' + host + ' is pwned!';
        console.log(msg);
const embed = new Discord.MessageEmbed()
      .setColor("EEFF00")
	.setTitle('⚡ Thunderye')
	.setDescription(msg)
	.setFooter('© Thunder - 2021')
	.setThumbnail("https://i.hizliresim.com/ivrg2py.gif")
 message.channel.send(embed);
     });
});
    } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.channel.send(new MessageEmbed()
            .setTitle(`❌ ERROR | An error occurred`)
            .setDescription(`\`\`\`${e.stack}\`\`\``)
        );
    }
  }
}
