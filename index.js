const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, ]});

client.on('messageCreate', (message) => {
    if(message.author.bot) return ;
    // This is not working here.. Will fix this later
    if(message.content.startsWith("create")){
        const url = message.content.split("create")[1];
        return message.reply({
            content:"Short URL for" + url,
        });
    }
    message.reply({
        content: "Hi Saurav, Bot here..",
    })
});

client.on('interactionCreate', (interaction)=>{
    console.log(interaction)
    interaction.reply('Pong')
});

client.login("MTNzQ0NDgwOA.G_c1A3.DAIeWYl5-1fZjTgzzyKr72tK5SQ") //Change the TOKEN i've explecitly putted it wrong..!!