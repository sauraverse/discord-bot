const { REST, Routes } = require('discord.js');

const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
  ];

const rest = new REST({ version: '10' }).setToken("MTIxNzc4MzMQ0NDgwOA.G_c1A3.DeWYl5-1fZjTgzzve1wR-RyKr72tK5SQ"); //Change the TOKEN i've explecitly putted it wrong..!!

(async () =>{
try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands("121778444808"), { body: commands }); //Change the CLIENT_ID here, i've explecitely putted it wrong here..!!
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();