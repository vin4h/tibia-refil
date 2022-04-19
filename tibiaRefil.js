const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = "!.";
const infoRp = require("./lib/royalPaladin.json")
const infoEk = require("./lib/eliteKnight.json")
const infoEd = require("./lib/elderDruid.json")
const infoMs = require("./lib/masterSorcerer.json")
const comandos = require('./lib/comandos.json')

client.on("message", msg => {
  if (msg.content.includes(prefix)) {
    if (msg.content === prefix + "rp.gt") {
      msg.reply(infoRp.gt.refil + "\n" + infoRp.gt.optional);
    }

    if (msg.content === prefix + "rp.rotacao") {
      msg.reply(infoRp.rotacao.info + "\n" + infoRp.rotacao.refil + "\n" + infoRp.rotacao.optional);
    }

    if (msg.content === prefix + "rp.walls") {
      msg.reply(infoRp.walls.info + "\n" + infoRp.walls.refil + "\n" + infoRp.walls.optional);
    }

    if (msg.content === prefix + "ek.gt") {
      msg.reply(infoEk.gt);
    }

    if (msg.content === prefix + "ek.rotacao") {
      msg.reply(infoEk.rotacao.info + "\n" + infoEk.rotacao.refil);
    }

    if (msg.content === prefix + "ed.gt") {
      msg.reply(infoEd.gt)
    }

    if (msg.content === prefix + "ed.rotacao") {
      msg.reply(infoEd.rotacao.info + "\n" + infoEd.rotacao.refil)
    }

    if (msg.content === prefix + "ms.gt") {
      msg.reply(infoMs.gt)
    }

    if (msg.content === prefix + "urso") {
      msg.reply("<@bruhh_br#2160>so olha o !.comandos")
    }
  }
})

client.login(process.env.TOKEN)
