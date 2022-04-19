const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = "!.";
const infoRp = require("./lib/royalPaladin.json")
const infoEk = require("./lib/eliteKnight.json")

client.on("message", msg => {
  if (msg.content.includes(prefix)) {
    if (msg.content === prefix + "rp.gt") {
      msg.reply(infoRp.gt);
    }

    if (msg.content === prefix + "rp.rotacao") {
      msg.reply(infoRp.rotacao.info);
      msg.reply(infoRp.rotacao.refil);
    }

    if (msg.content === prefix + "ek.gt") {
      msg.reply(infoEk.gt);
    }

    if (msg.content === prefix + "ek.rotacao") {
      msg.reply(infoRp.rotacao.info);
      msg.reply(infoRp.rotacao.refil);
    }
  }
})

client.login(process.env.TOKEN)
