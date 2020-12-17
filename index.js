const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
    if (/^(HE+HO+)$/.test(msg.content)) {
        msg.channel.send(new Discord.MessageAttachment("./heho.jpg"));
        return;
    }
    if (/^(he+ho+)$/i.test(msg.content)) {
        msg.channel.send('<:heho:748492401286578206>');
        return;
    }
});

client.login(process.env.TOKEN);
