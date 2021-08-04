// ngl im too lazy to do this

const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "update",
    category: "methods",
    description: "good morning",
    run: async (client, message, args) => {
      try{
const embed = new Discord.MessageEmbed()
      .setColor("EEFF00")
	.setTitle('⚡ Proxies Updated')
	.addField("Downloaded", "Proxies Have Just Been Refreshed")
	.setFooter('© Thunder - 2021')
 message.channel.send(embed);
    } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.channel.send(new MessageEmbed()
            .setTitle(`❌ ERROR | An error occurred`)
            .setDescription(`\`\`\`${e.stack}\`\`\``)
        );
    }
  }
}
