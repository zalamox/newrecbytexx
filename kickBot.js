const Discord = require('discord.js')


const axios = require('axios')
const { Util } = require('discord.js');



const { WebhookClient } = require('discord.js');

const fs = require('fs');
const {
  MessageAttachment
} = require('discord.js');
const {
  MessageEmbed,
  permissionOverwrites,
  MessageSelectMenu,
  TextInputComponent,
  ChannelType,
  MessageButton,
  MessageActionRow,
  Modal,
  Permissions
} = require("discord.js");

const {
  Client,
  Intents
} = require('discord.js');



const moment = require('moment')
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS" , "GUILD_PRESENCES" , "GUILD_BANS" , "GUILD_INVITES" , "GUILD_MESSAGE_REACTIONS" , "GUILD_MESSAGE_TYPING" , "DIRECT_MESSAGES" , "DIRECT_MESSAGE_REACTIONS" , "DIRECT_MESSAGE_TYPING"]
});


const mongoose = require("mongoose");


function createKickBot (token) {
    const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGES' , 'GUILD_PRESENCES'] });
  require('events').EventEmitter.defaultMaxListeners = 1000000000;

client.on("ready", async () => {
    console.log(client.user.tag);
 client.user.setActivity(`-give | -button`, {
    type: "PLAYING"
  });
     client.user.setPresence({ status: 'online' });
  
  });


client.on('ready', async () => {
  const uu = require('./auto.js')
 await uu(client)
  console.log('Connected to database');
});
   
    





  // update status of token to "online"

  client.login(token);
    fs.readFile('tokens.json', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const tokenData = JSON.parse(data);
  const tokens = tokenData.tokens;

  // Loop through the tokens and log in to Discord with each one
  for (const token of tokens) {
    client.login(token)
      .then(() => {
        console.log(`Logged in as ${client.user.tag} using token ${token}`);
      })
      .catch((err) => {
        console.error(`Error logging in with token ${token}: ${err}`);
      });
  }
});
      

      
}

module.exports = createKickBot;
   
