const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("message", msg => {
  if (msg.content === "refil.rp.gt") {
    msg.reply("600x Spectral Bolt \n 300x Diamond Arrow \n 700x Great Mana Potion \n 400x Avalanche \n 250x SD");
  }
})



client.login(process.env.TOKEN)
