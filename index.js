const Discord = require("discord.js");
const flags = require("minimist");
const regParse = require("regex-parser");

const client = new Discord.Client();

const owners = ["285821956337696779"];
const commands = [];

const getUserByMention = (mention) => {
  const matches = mention.match(/^<@!?(\d+)>$/);
  if (!matches) return;
  return client.users.cache.get(matches[1]);
};

/**
 * Parses message's arguments with flags,
 * then add the new reaction to the list.
 *
 * @param {Array[string]} args    Message's arguments.
 * @param {string}        channel Message's channel ID.
 */
const addReaction = (args, channel) => {
  /* Parsing the parameters */
  args = flags(args, {
    string: ["channel", "emote", "regex"],
    boolean: "react",
    alias: { c: "channel", e: "emote", r: "regex" },
    default: { channel: channel },
  });
  /* Adding the command to the list */
  commands.push({
    chnid: args.channel.replace(/[\\<>@#&!]/g, ""), // to only keep the ID string
    emote: args.emote,
    regex: regParse(args.regex),
    react: args.react,
  });
};

client.on("message", (msg) => {
  /* ignores bot's messages */
  if (msg.author.bot) return;

  console.log();

  /* trims arguments */
  const args = msg.content.trim().split(/ +/);
  /* checks if Gillbert is tagged */
  if (getUserByMention(args[0]) === client.user) {
    /* checks if author is in owners list */
    if (owners.includes(msg.author.id))
      msg.reply("Sorry, you don't have the right to do that.");
    else addReaction(args.slice(1), `<#${msg.channel.id}>`);
    return;
  }

  /* checks each command's properties */
  commands.forEach((cmd) => {
    if (
      (cmd.chnid == "all" || cmd.chnid == msg.channel.id) &&
      cmd.regex.test(msg.content)
    ) {
      if (cmd.react) msg.react(cmd.emote);
      else msg.channel.send(cmd.emote);
      return;
    }
  });
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.TOKEN);
