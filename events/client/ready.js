//here the event starts
const config = require("../../botconfig/config.json")
module.exports = client => {
  try{
    console.log("passed ready.js 1")}catch{ /* */ }

  try{
    client.user.setActivity(client.user.username, { type: "PLAYING" });
console.log("Passed changing status 1")
  }catch (e) {
      console.log(String(e.stack).red);
  }
  //Change status each 10 minutes
  setTimeout(()=>{
    try{
      client.user.setActivity("discord.gg/nvEnnd9z", { type: "PLAYING" });
      console.log("Passed changing status 2")
    }catch (e) {
        console.log(String(e.stack).red);
    }
  }, 10*60*1000)
}
/**
  * @INFO
  * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/Discord-Js-Handler-Template
  * @INFO
  * Work for Milrato Development | https://milrato.eu
  * @INFO
  * Please mention Him / Milrato Development, when using this Code!
  * @INFO
*/
