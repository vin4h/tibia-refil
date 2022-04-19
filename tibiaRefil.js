const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = "!.";
const infoRp = require("./lib/royalPaladin.json")

client.on("message", msg => {
  if (msg.content.includes(prefix)) {
    if (msg.content === prefix + "rp.gt") {
      msg.reply(infoRp.gt);
    }

    if (msg.content === prefix + "rp.rotacao") {
      msg.reply(infoRp.rotacao.info);
      msg.reply(infoRp.rotacao.refil);
    }

    if (msg.content === "ek.gt") {
      msg.reply(" Arma (Fisico, Terra) \n 150x Supreme Health Potion \n 1500x Strong Mana Potion \n Plasma Ring e Prismatic Ring");
    }
  }
})

client.login(process.env.TOKEN)
