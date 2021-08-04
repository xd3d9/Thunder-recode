const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "help",
    category: "info",
    description: "Returns all Commmands, or one specific command",
    run: async (client, message, args) => {
      try{
        const embed = new MessageEmbed()
      .setTitle(':zap: All Commands')
	  .setDescription("Commands:")
	  .addField(".Join", "Starts Join Attack for 60 seconds, Usage: .Join Ip Port")
	  .addField(".Motd", "Starts Motd Attack for 60 seconds, Usage: .Motd Ip Port")
	  .addField(".Randbyte", "Starts Randbyte Attack for 60 seconds, Usage: .RandByte Ip Port")
	  .addField(".DDoS", "Starts DDoS Attack For 60 Seconds, Usage: .DDoS IP Port\n:x: Unavailable")
	  .addField(".HandShake", "Starts HandShake Attack For 60 Seconds, Usage: .HandShake IP Port")
	  .addField(".Update", "Updates all proxies")
	  .setFooter("© Thunder - 2021")
      .setColor("EEFF00")
    message.channel.send(embed);
    } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`❌ ERROR | An error occurred`)
            .setDescription(`\`\`\`${e.stack}\`\`\``)
        );
    }
  }
}
