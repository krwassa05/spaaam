const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("533983604590510090")
setInterval(function() {
channel.send(`krwassa spam credit hala wtf ana hway`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
