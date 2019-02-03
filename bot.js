const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("541727275025170448")
setInterval(function() {
channel.send(`وخر عني ابي اجمع كريدت`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
