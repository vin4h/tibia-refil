const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("message", msg => {
  if (msg.content === "rp.gt") {
    msg.reply(" 600x Spectral Bolt \n 300x Diamond Arrow \n 700x Great Mana Potion \n 400x Avalanche \n 250x SD \n 2x Energy Ring");
  }
  if (msg.content === "ek.gt") {
    msg.reply(" Arma (Fisico, Terra) \n 150x Supreme Health Potion \n 1500x Strong Mana Potion \n Plasma Ring e Prismatic Ring");
  }
})

client.login(process.env.TOKEN)
