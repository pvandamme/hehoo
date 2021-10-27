const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
    if (/^(HE+\s*HO+)$/.test(msg.content)) {
        msg.channel.send(new Discord.MessageAttachment("./heho.png"));
    } else if (/^(he+\s*ho+)$/.test(msg.content)) {
        msg.channel.send('<:heho:748492401286578206>');
    } else if (/^(he+\s*ho+)$/i.test(msg.content)) {
        msg.channel.send(new Discord.MessageAttachment("./HeEeHoOo.png"));
    } else if (/^(he+)$/i.test(msg.content)) {
        msg.channel.send(new Discord.MessageAttachment("./he.png"));
    } else if (/^(ho+)$/i.test(msg.content)) {
        msg.channel.send(new Discord.MessageAttachment("./ho.png"));
    }
});

client.login(process.env.TOKEN);
