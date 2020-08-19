const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
    if (/^(heho+)$/i.test(msg.content)) {
        msg.react("745675324481601668");
        if (msg.content === "HEHO!") {
            msg.channel.send(new Discord.MessageAttachment("./heho.jpg"));
        } else {
            msg.channel.send("<:heho:745675324481601668>");
        }
    }
});

client.login(process.env.TOKEN);
