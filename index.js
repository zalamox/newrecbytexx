const Discord = require("discord.js");
const fs = require('fs');
const createKickBot = require('./kickBot.js');

const token = require('./models/tokennss.js');


const {Client, Intents, MessageAttachment, MessageEmbed, permissionOverwrites, ChannelType, Permissions , MessageButton , MessageActionRow, Modal, TextInputComponent} = require("discord.js");

const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS" , "GUILD_PRESENCES" , "GUILD_BANS" , "GUILD_INVITES" , "GUILD_MESSAGE_REACTIONS" , "GUILD_MESSAGE_TYPING" , "DIRECT_MESSAGES" , "DIRECT_MESSAGE_REACTIONS" , "DIRECT_MESSAGE_TYPING"]
});

// Require the ban bot module and pass the Client class
// const banBot = require('./banBot')(Client, ''); ////////// https://youtu.be/gtykpkOYy94

client.on('ready', () => {
  console.log('Bot is online!');
});
const mongoose = require("mongoose");




mongoose.connect("mongodb+srv://mariam3amrhany:amr777amr!@cluster0.d1d3pin.mongodb.net/data");


console.log('Connected to MongoDB');
client.on("ready", async () => {
  console.log(client.user.tag);
  const du = require('./auto.js')
  await du(client)

});

process.on("unhandledRejection", error => {
  return;
});
process.on("unhandledRejection", error => {
  return;
});
process.on("unhandledRejection", error => {
  return;
});

process.on("unhandledRejection", error => {
  return console.log(error)
});




client.on('ready', () => {
  function abady() {
    let status = [`Tex Auto Rec Manager`]
    let S = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[S], { type: 'PLAYING' })
  };
  //ismailmgde
  setInterval(abady, 5000)

})



///////////////////////////// https://youtu.be/gtykpkOYy94   
///







client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'auto') {
    if (!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD)) {
      return interaction.reply({
        content: 'You do not have permission to use this command!'
      });
    }

    const butt = new MessageButton()
      .setCustomId('kilal')
      .setLabel('click')
      .setStyle('DANGER');
    
    const roww = new MessageActionRow()
      .addComponents(butt);
    
    await interaction.reply({
      content: "قم بموضع توكن حسابك و ايدى البوت ",
      components: [roww]
    });
  }
});
  
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'button') {
    if (!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD)) {
      return interaction.reply({
        content: 'You do not have permission to use this command!'
      });
    }
      
    const butt = new MessageButton()
    .setCustomId('kilall')
    .setLabel('click')
    .setStyle('DANGER')
  
  const roww = new MessageActionRow()
    .addComponents(butt)
    
    await interaction.reply({
      content: "قم بموضع توكن حسابك و ايدى البوت ",
      components: [roww]
    });
  }
});
  client.on('messageCreate', async (message) => {
    
  
    if (message.content.startsWith('-auto')) {
           if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD)) {
        return messaage.reply({
          content: 'You do not have permission to use this command!'
     
        });
      }
  
      
        const butt = new MessageButton()
        .setCustomId('kilal')
        .setLabel('click')
        .setStyle('DANGER')
      
      const roww = new MessageActionRow()
        .addComponents(butt)
      
        
        
      
        await message.channel.send({content :"قم بموضع توكن حسابك و ايدى البوت " , components : [roww]})
    }
  })
  
  
  client.on('messageCreate', async (message) => {
    
  
    if (message.content.startsWith('-button')) {
           if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD)) {
        return messaage.reply({
          content: 'You do not have permission to use this command!'
     
        });
      }
  
      
        const butt = new MessageButton()
        .setCustomId('kilall')
        .setLabel('click')
        .setStyle('DANGER')
      
      const roww = new MessageActionRow()
        .addComponents(butt)
  
        
        
      
        await message.channel.send({content :"قم بموضع توكن حسابك و ايدى البوت " , components : [roww]})
    }
  })
  
  const counter = require('./models/counter.js');
  client.on('interactionCreate', async (interaction) => {
    
    if (!interaction.isSelectMenu()) return
  
      if (interaction.customId === `hope`) {
  
  
        
          let selectedOption = interaction.values[0];
          
            
          
        
      
          ////
          if (selectedOption === 'voice') {
            try {
             const ticketNumber = (
               await counter.findOneAndUpdate(
                 { id: interaction.guild.id },
                 { $inc: { count: 1 } },
                 { upsert: true, new: true }
               )
             ).count;
             const category = `1153715414791098378`;
       
             const channelName = `ticket-${ticketNumber}`;
       
             const channel = await interaction.guild.channels.create(channelName, {
               type: 'GUILD_TEXT',
               parent: category,
               permissionOverwrites: [
                 {
                   id: interaction.guild.id,
                   deny: ['VIEW_CHANNEL'],
                 },
                 {
                   id: interaction.user.id,
                   allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
                 },
               ],
             });
       
             const close = new MessageButton()
               .setCustomId('closeart')
               .setLabel('close')
               .setStyle('SUCCESS');
       
             const butdta = new MessageButton()
               .setCustomId('tlal')
               .setLabel('continue')
               .setStyle('DANGER');
       
             const uudta = new MessageActionRow().addComponents(butdta, close);
       
             channel.send({
               content: `<@${interaction.user.id}>`,
               embeds: [
                 new MessageEmbed().setDescription(
                  `**لجعل حسابك اوتو رياشكن لاى لرياكشن "Continue" والتحويل اولا **`
                  ),
               ],
               components: [uudta],
             });
        const btt = new MessageButton()
              .setLabel('اضغط لفيديو الشرح')
              .setStyle('LINK')
              .setEmoji('1106135549011558430')
              .setURL('https://www.youtube.com/watch?v=IYEzK55iZ9E&t=7s')
              const bar = new MessageActionRow()
              .addComponents[btt]
        const member = interaction.member
        
        member.send({content : `من فضلك قم بسماع الفيديو اولا  لمعرفة كيف تشترى واين تضع ايدى الروم والتوكن فى المكان المحدد لهما وما هى البرمشن اللازم الحساب يحصل عليها فى الروم التى ستضع ايدى تبعها كى لاتحدث اى مشكلة معك `, components : [bar]})
             await interaction.reply({
               content: `*✔ Ticket Created <#${channel.id}>*`,
               ephemeral: true,
             });
           } catch (error) {
             console.error(error);
                    const errorMessage = `An error occurred: ${error.message}`;
       
         // Send the error message to the webhook
         await axios.post(webhookClient.url, { content: errorMessage });
             interaction.reply({content : '**ربما انت لم تحدد ايدى الكاتوجرى بشكل صحيح او ربما انت تستخدم بوت حماية او مفعل التو فاكتور فى سيرفرك \n لكى يستطيع البوت بفتح تكت انت يجب ان تغلق بوت الحماية او تغلق التو فاكتور او تعطر البوت الميكر رتبة اعلى من رتبة بوت الحماية ** ' , ephemeral : true});
           }
        
         }
       
  
         if (selectedOption === 'voicee') {
          try {
           const ticketNumber = (
             await counter.findOneAndUpdate(
               { id: interaction.guild.id },
               { $inc: { count: 1 } },
               { upsert: true, new: true }
             )
           ).count;
           const category = `1153715414791098378`;
     
           const channelName = `ticket-${ticketNumber}`;
     
           const channel = await interaction.guild.channels.create(channelName, {
             type: 'GUILD_TEXT',
             parent: category,
             permissionOverwrites: [
               {
                 id: interaction.guild.id,
                 deny: ['VIEW_CHANNEL'],
               },
               {
                 id: interaction.user.id,
                 allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
               },
             ],
           });
     
           const close = new MessageButton()
             .setCustomId('closeart')
             .setLabel('close')
             .setStyle('SUCCESS');
     
           const butdta = new MessageButton()
             .setCustomId('tlall')
             .setLabel('continue')
             .setStyle('DANGER');
     
           const uudta = new MessageActionRow().addComponents(butdta, close);
     
           channel.send({
             content: `<@${interaction.user.id}>`,
             embeds: [
               new MessageEmbed().setDescription(
                 `**لجعل حسابك اوتو رياشكن لاى زرار"Continue" والتحويل اولا **`
               ),
             ],
             components: [uudta],
           });
      const btt = new MessageButton()
            .setLabel('اضغط لفيديو الشرح')
            .setStyle('LINK')
            .setEmoji('1106135549011558430')
            .setURL('https://www.youtube.com/watch?v=IYEzK55iZ9E&t=7s')
            const bar = new MessageActionRow()
            .addComponents[btt]
      const member = interaction.member
      
      member.send({content : `من فضلك قم بسماع الفيديو اولا  لمعرفة كيف تشترى واين تضع ايدى بوت الجيفااى والتوكن فى المكان المحدد لهما وما هى البرمشن اللازم الحساب يحصل عليها فى الروم التى ستضع ايدى تبعها كى لاتحدث اى مشكلة معك `, components : [bar]})
           await interaction.reply({
             content: `*✔ Ticket Created <#${channel.id}>*`,
             ephemeral: true,
           });
         } catch (error) {
           console.error(error);
                  const errorMessage = `An error occurred: ${error.message}`;
     
       // Send the error message to the webhook
       await axios.post(webhookClient.url, { content: errorMessage });
           interaction.reply({content : '**ربما انت لم تحدد ايدى الكاتوجرى بشكل صحيح او ربما انت تستخدم بوت حماية او مفعل التو فاكتور فى سيرفرك \n لكى يستطيع البوت بفتح تكت انت يجب ان تغلق بوت الحماية او تغلق التو فاكتور او تعطر البوت الميكر رتبة اعلى من رتبة بوت الحماية ** ' , ephemeral : true});
         }
      
       }
         
  
  
       
  
          if (selectedOption === 'reset') {
            selectedOption = null; // clear the selected option
          
            // reset the options array by setting the `selected` property of all options to `false`
            optionss.forEach(option => {
              option.selected = false;
            });
          
            await interaction.reply({content : `**Selection reset. Please choose an option from the menu.**` , ephemeral : true});
          } else {
            // clear the `selected` property of all options except the selected option
            optionss.forEach(option => {
              if (option.value === selectedOption) {
                option.selected = true;
              } else {
                option.selected = false;
              }
            });
          
            // code for handling other options
          }
  
  
  
  
  
  
  
        
  }
  })
  
  
  
  
  
  
  //////// voice 
  client.on('interactionCreate', async (interaction) => {
    try {
      if (!interaction.isButton()) return;
  
      if (interaction.customId === 'tlal') {
  
        await interaction.message.edit({
          components: [
            new MessageActionRow().addComponents(
              new MessageButton()
                .setCustomId('tlal')
                .setLabel('تم الضغط على الزر')
                .setStyle('PRIMARY')
                .setDisabled(true),
              new MessageButton()
                .setCustomId('closeart')
                .setLabel('لقفل الروم')
                .setStyle('DANGER')
                .setDisabled(false)
            ),
          ],
        });
             const btt = new MessageButton()
             .setLabel('اضغط لفيديو الشرح')
             .setStyle('LINK')
             .setEmoji('1106135549011558430')
             .setURL('https://www.youtube.com/watch?v=IYEzK55iZ9E&t=7s')
             const bar = new MessageActionRow()
             .addComponents[btt]
       const member = interaction.member
       
       member.send({content : `من فضلك قم بسماع الفيديو اولا  لمعرفة كيف تشترى واين تضع ايدى الروم والتوكن فى المكان المحدد لهما وما هى البرمشن اللازم الحساب يحصل عليها فى الروم التى ستضع ايدى تبعها كى لاتحدث اى مشكلة معك `, components : [bar]})
        const owner = `853301495662641152`;
        const price = '94747';
  
        await interaction.reply({ content: `**Done clicked Successfully ✅**`, ephemeral: true });
        await interaction.channel.send({
          embeds: [
            new MessageEmbed().setDescription(`**
            .قم بكتابة أمر التحويل التالي
            c ${owner} ${price}
            لديك 5 دقائق حتى تقوم بتحويل المبلغ
          **`).setImage(
              'https://media.discordapp.net/attachments/1105949579851071579/1153129847233716235/--.jpg?width=1025&height=342'
            ),
          ],
        });
        await interaction.channel.send({ content: `c ${owner} ${price}` });
      }
    } catch (error) {
      console.error(error);
      const errorMessage = `An error occurred: ${error.message}`;
  
      // Send the error message to the webhook
      const webhookClient = {
        url: 'https://discord.com/api/webhooks/1153321147706920980/fLfvxmq6TOoIizsWnTDL7CayzYCdA-2fjDOXiSr30cr28sUITw1KDu3f3W7zEHW961ma',
      };
      await axios.post(webhookClient.url, { content: errorMessage });
  
      await interaction.reply({
        content: 'An error occurred while processing your request.',
        ephemeral: true,
      });
    }
  });
  
  
  
  
  /////but
  client.on('interactionCreate', async (interaction) => {
    try {
      if (!interaction.isButton()) return;
  
      if (interaction.customId === 'tlall') {
  
        await interaction.message.edit({
          components: [
            new MessageActionRow().addComponents(
              new MessageButton()
                .setCustomId('tlall')
                .setLabel('تم الضغط على الزر')
                .setStyle('PRIMARY')
                .setDisabled(true),
              new MessageButton()
                .setCustomId('closeart')
                .setLabel('لقفل الروم')
                .setStyle('DANGER')
                .setDisabled(false)
            ),
          ],
        });
             const btt = new MessageButton()
             .setLabel('اضغط لفيديو الشرح')
             .setStyle('LINK')
             .setEmoji('1106135549011558430')
             .setURL('https://www.youtube.com/watch?v=IYEzK55iZ9E&t=7s')
             const bar = new MessageActionRow()
             .addComponents[btt]
       const member = interaction.member
       
       member.send({content : `من فضلك قم بسماع الفيديو اولا  لمعرفة كيف تشترى واين تضع ايدى الروم والتوكن فى المكان المحدد لهما وما هى البرمشن اللازم الحساب يحصل عليها فى الروم التى ستضع ايدى تبعها كى لاتحدث اى مشكلة معك `, components : [bar]})
        const owner = `853301495662641152`;
        const price = '84219';
  
        await interaction.reply({ content: `**Done clicked Successfully ✅**`, ephemeral: true });
        await interaction.channel.send({
          embeds: [
            new MessageEmbed().setDescription(`**
            .قم بكتابة أمر التحويل التالي
            c ${owner} ${price}
            لديك 5 دقائق حتى تقوم بتحويل المبلغ
          **`).setImage(
              'https://media.discordapp.net/attachments/1105949579851071579/1153129847233716235/--.jpg?width=1025&height=342'
            ),
          ],
        });
        await interaction.channel.send({ content: `c ${owner} ${price}` });
      }
    } catch (error) {
      console.error(error);
      const errorMessage = `An error occurred: ${error.message}`;
  
      // Send the error message to the webhook
      const webhookClient = {
        url: 'https://discord.com/api/webhooks/1153321147706920980/fLfvxmq6TOoIizsWnTDL7CayzYCdA-2fjDOXiSr30cr28sUITw1KDu3f3W7zEHW961ma',
      };
      await axios.post(webhookClient.url, { content: errorMessage });
  
      await interaction.reply({
        content: 'An error occurred while processing your request.',
        ephemeral: true,
      });
    }
  });
  ///
  
  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isButton()) return;
  
    if (interaction.customId === 'closeart') {
  await interaction.channel.delete()
    }
  })
  
  const buttonCooldown = 10000; // 1 minute cooldown
  
  const buttonTimestamps = new Map();
  
  
  ///////voice
  
  
  client.on('messageCreate', async message => {
    if (message.author.bot) return;
  
  
  
  
    let price_without = `90009` // boost tool
    let ownerId = `853301495662641152`
    const probotId = `282859044593598464`
  
    let trans_msg = `**:moneybag: | ${message.author.username}, has transferred \`$${price_without}\` to <@!${ownerId}> **`;
    let collect2 = await message.channel.awaitMessages({
      filter: mm => mm.author.id === probotId && mm.content === trans_msg,
      max: 1,
      time: 0
    }).catch(() => 0);
    collect2 = collect2.first();
    if (!collect2) return;
    if (collect2.content != trans_msg) return;
  
    const lastTimestamp = buttonTimestamps.get(message.author.id) || 0;
    const now = Date.now();
  
    if (now - lastTimestamp >= buttonCooldown) {
      const butt = new MessageButton()
        .setCustomId('kilal')
        .setLabel('click')
        .setStyle('DANGER')
      
      const roww = new MessageActionRow()
        .addComponents(butt)
      message.channel.send({embeds : [new MessageEmbed().setDescription(`**من فضلك اضغط على الزر وقم بوضع توكن حسابك الذى تريد فى الخانة الاولى  والخانة الثانية قم بوضع ايدى البوت العاوز تعمل ليه رياكشن بس برياكشن '**`).setImage('https://media.discordapp.net/attachments/1105949579851071579/1209071254720479242/IMG_20240219_113658.jpg?ex=65e5965a&is=65d3215a&hm=ea6711e9ef02db205b4cb167d9c914493297077206329105fafb9531948d1401&')] ,
        components: [roww]
      })
  
      buttonTimestamps.set(message.author.id, now);
          
  const role = `1208830936352030771`
  const re = message.guild.roles.cache.get(role)
  
  
      const member = message.member
  await member.roles.add(re)
  const channel = `1105970806250536970`
  const ree = message.guild.channels.cache.get(channel)
  await ree.send({content : `${member} دفع واخذ رول ${re}`})
  // await member.roles.add(role)
  //        const tt = await logg.findOne({ id: message.guild.id });
  //     const channelMention = tt.channel;
  //     const channelId = channelMention.match(/\d+/)[0];
  //     const channel = await message.guild.channels.cache.get(channelId);
  // channel.send({content : `**الشخص ${member} دفع واشترى بوت واخذ رتبة ${role}**`})
  member.send({content : `** تم الدفع بنجاح استمتع بتلفيل حسابك \n ملحوظة لو مش عارف تجيب توكن بتاعك اسمع الفيديو ده \n https://imgur.com/R70c44u \n\n # لا تنسى ان تدخل البروبوت فى السيرفر الذى تقوم بالتلفيل فيه \n\n # ايدي الروم الذى ستقوم بوضعه يجب ان يكون حسابك له القدرة على الكتابة فيها**` })
  
    }
  });
  
  
  /////but
  client.on('messageCreate', async message => {
    if (message.author.bot) return;
  
  
  
  
    let price_without = `80008` // boost tool
    let ownerId = `853301495662641152`
    const probotId = `282859044593598464`
  
    let trans_msg = `**:moneybag: | ${message.author.username}, has transferred \`$${price_without}\` to <@!${ownerId}> **`;
    let collect2 = await message.channel.awaitMessages({
      filter: mm => mm.author.id === probotId && mm.content === trans_msg,
      max: 1,
      time: 0
    }).catch(() => 0);
    collect2 = collect2.first();
    if (!collect2) return;
    if (collect2.content != trans_msg) return;
  
    const lastTimestamp = buttonTimestamps.get(message.author.id) || 0;
    const now = Date.now();
  
    if (now - lastTimestamp >= buttonCooldown) {
      const butt = new MessageButton()
        .setCustomId('kilall')
        .setLabel('click')
        .setStyle('DANGER')
      
      const roww = new MessageActionRow()
        .addComponents(butt)
      message.channel.send({embeds : [new MessageEmbed().setDescription(`**من فضلك اضغط على الزر وقم بوضع توكن حسابك الذى تريد وضعه فى الخانة الاولى  والخانة الثانية قم بوضع ايدى البوت العاوز تعمل رياكشن ليه بس يكون زرار'**`).setImage('https://media.discordapp.net/attachments/1105949579851071579/1209071254720479242/IMG_20240219_113658.jpg?ex=65e5965a&is=65d3215a&hm=ea6711e9ef02db205b4cb167d9c914493297077206329105fafb9531948d1401&')] ,
        components: [roww]
      })
  
      buttonTimestamps.set(message.author.id, now);
          
  const role = `1208830936352030771`
  const re = message.guild.roles.cache.get(role)
  
  
      const member = message.member
  await member.roles.add(re)
  const channel = `1105970806250536970`
  const ree = message.guild.channels.cache.get(channel)
  await ree.send({content : `${member} دفع واخذ رول ${re}`})
  // await member.roles.add(role)
  //        const tt = await logg.findOne({ id: message.guild.id });
  //     const channelMention = tt.channel;
  //     const channelId = channelMention.match(/\d+/)[0];
  //     const channel = await message.guild.channels.cache.get(channelId);
  // channel.send({content : `**الشخص ${member} دفع واشترى بوت واخذ رتبة ${role}**`})
  member.send({content : `** تم الدفع بنجاح استمتع بتلفيل حسابك \n ملحوظة لو مش عارف تجيب توكن بتاعك اسمع الفيديو ده \n https://imgur.com/R70c44u \n\n # لا تنسى ان تدخل البروبوت فى السيرفر الذى تقوم بالتلفيل فيه \n\n # ايدي الروم الذى ستقوم بوضعه يجب ان يكون حسابك له القدرة على الكتابة فيها**` })
  
    }
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isButton()) return;
  
    if (interaction.customId === 'kosmyy') {
        const ttar = new MessageButton()
        .setLabel('فيديو شرح البوت')
        .setStyle('LINK')
        .setURL('https://www.youtube.com/watch?v=68xWvLAQoUE&t=33s')
             const tta = new MessageButton()
        .setLabel('سيرفر دعم البوت')
        .setStyle('LINK')
        .setURL('https://discord.gg/uvCY96D2ey')
             
             const te = new MessageActionRow()
             .addComponents (ttar , tta)
                
           
       
        await interaction.reply({content : `*للشراء قم بسماع فيديو شرح اليوتيوب جيدا و ثم قم بالذهاب الى سيرفر الدعم وافتح تكت *` , components : [ te] , ephemeral : true})
    }
  })
  
  
  
  
  
  
  /////
  
  
  
  
  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isButton()) return;
  
    if (interaction.customId === 'kosmyy') {
        const ttar = new MessageButton()
        .setLabel('فيديو شرح البوت')
        .setStyle('LINK')
        .setURL('https://www.youtube.com/watch?v=68xWvLAQoUE&t=33s')
             const tta = new MessageButton()
        .setLabel('سيرفر دعم البوت')
        .setStyle('LINK')
        .setURL('https://discord.gg/uvCY96D2ey')
             
             const te = new MessageActionRow()
             .addComponents (ttar , tta)
                
           
       
        await interaction.reply({content : `*للشراء قم بسماع فيديو شرح اليوتيوب جيدا و ثم قم بالذهاب الى سيرفر الدعم وافتح تكت *` , components : [ te] , ephemeral : true})
    }
  })
  
  
  
  
  
  ///////////////voice
  
  
  

client.setMaxListeners(20);

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isButton()) return;

    if (interaction.customId === 'kilal') {
        const modalal = new Modal()
            .setCustomId('myModalal')
            .setTitle('My Modal');

        const tokennnnl = new TextInputComponent()
            .setCustomId('tokenlal')
            .setLabel('account token')
            .setStyle('SHORT');

        const tokennnnl2 = new TextInputComponent()
            .setCustomId('tokenlal2')
            .setLabel('Giveaway bot id')
            .setStyle('SHORT');

        const firstActionRowwwwl = new MessageActionRow().addComponents(tokennnnl);
        const firstActionRowwwwl1 = new MessageActionRow().addComponents(tokennnnl2);

        modalal.addComponents(firstActionRowwwwl, firstActionRowwwwl1);

        await interaction.showModal(modalal);
    }
});
  
  ////but
  
  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isButton()) return;
    
    if (interaction.customId === 'kilall') {
      const modalal = new Modal()
        .setCustomId('myModalall')
        .setTitle('My Modal');
  
      const tokennnnl = new TextInputComponent()
        .setCustomId('tokenlall')
        .setLabel(`account token`)
        .setStyle('SHORT');
        const tokennnnl2 = new TextInputComponent()
        .setCustomId('tokenlal3')
        .setLabel(`Giveaway bot id`)
        .setStyle('SHORT');
  
  
  
  
      const firstActionRowwwwl = new MessageActionRow().addComponents(tokennnnl);
      const firstActionRowwwwl1 = new MessageActionRow().addComponents(tokennnnl2);
    
  
      modalal.addComponents(firstActionRowwwwl , firstActionRowwwwl1);
  
      await interaction.showModal(modalal);
    }
  });
  
  
  
  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isModalSubmit()) return;
  
    if (interaction.customId === 'myModalal') {
      try {
        const raro = require('./models/voice.js');
        const tokennno = interaction.fields.getTextInputValue('tokenlal');
        const but = interaction.fields.getTextInputValue('tokenlal2');
     
        const guildId = interaction.guild.id;
  
        raro.findOne({
          id: interaction.guild.id
        }, async (data) => {
          if (!data) {
            raro.create({
              id: guildId,
              token: tokennno,
              rea : but
            
            });
          }
        });
  
        const { Client } = require('discord.js-selfbot-v13');
        const clienttto = new Client();
  
        clienttto.on('ready', async () => {
          console.log(`${clienttto.user.username} is ready!`);
  
          try {
  
  
  
  
            clienttto.on('messageCreate', async message => {
              try {
                  // Check if the message is from the Giveaway bot
                  if (message.author.id === `${but}`) {
                      // Assuming there is at least one button in the first row
                 
                          // Click the first button in the first row
                       
                            await message.react("🎉")
                     
                         
                      
                  }
              } catch (error) {
                  console.error(`Failed to process message: ${error}`);
              }
          });
  
  
  
           
          } catch (error) {
            console.error(`Failed to fetch channel: ${error}`);
          }
        });
  
        await clienttto.login(tokennno);
  
        await interaction.update({
          content: `**   Giveaway bot id is ${but} :  \n تم حسابك الان اصبخ اوتو رياكشن**`,
          components: [
            new MessageActionRow().addComponents(
              new MessageButton()
                .setCustomId('kilal')
                .setLabel('تم الضغط')
                .setStyle('DANGER')
                .setDisabled(true)
            )
          ]
        });
  
 
  
        const bart = new MessageButton()
          .setLabel('قفل')
          .setCustomId('closeart')
          .setStyle('DANGER');
        const ri = new MessageActionRow().addComponents(bart);
        await interaction.channel.send({
          embeds: [
            new MessageEmbed().setDescription(
              `**حسابك الان اصبح اواتو رياكشن لبوت لايدى تبعه ${but}**`
            )
          ],
          components: [ri]
        });
  
        member.send({embeds : [new MessageEmbed().setDescription(`**المعلومات التى قمت بادخالها هى الاتى : \n\n توكن حسابك هو : ${tokennno} \n\n ايدى البوت العيعمل اوتو رياكشن عليه هو : ${but} \n\n # لا تنسى ان تدخل البروبوت فى السيرفر الذى تقوم بادخال الى الروم الصوتى فيه فيه**`)]})
  

        // Rest of your code...
      } catch (error) {
        console.error(error);
  
        await interaction.reply({
          content: '** توكن حسابك خطأ ❌ انت يجب ان تدخل توكن صحيح لحسابك || لو مش عارف تجيب توكن حسابك ازاى اكتب كلمة  (token)  **'
        });
      }
    }
  });
  
  ////// butt
  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isModalSubmit()) return;
  
    if (interaction.customId === 'myModalall') {
      try {
        const raro = require('./models/butto.js');
        const tokennno = interaction.fields.getTextInputValue('tokenlall');
        const but = interaction.fields.getTextInputValue('tokenlal3');
     
        const guildId = interaction.guild.id;
  
        raro.findOne({
          id: interaction.guild.id
        }, async (data) => {
          if (!data) {
            raro.create({
              id: guildId,
              token: tokennno,
              but : but
            
            });
          }
        });
  
        const { Client } = require('discord.js-selfbot-v13');
        const clienttto = new Client();
  
        clienttto.on('ready', async () => {
          console.log(`${clienttto.user.username} is ready!`);
  
          try {
  
  
            clienttto.on('messageCreate', async message => {
              try {
                  if (message.author.id === `${but}`) {
                      // Check if the message contains components
                      if (message.components.length > 0) {
                          const buttonRow = message.components[0]; // Assuming the button is in the first row
                          // Check if the button row contains buttons
                          if (buttonRow.components.length > 0) {
                              // Click the first button in the row
                              setTimeout( async () => {
                                await message.clickButton({ row: 0, col: 0 });
                              }, 10000);
                             
                          } else {
                              console.log('No buttons found in the button row.');
                          }
                      } else {
                          console.log('No components found in the message.');
                      }
                  }
              } catch (error) {
                  console.error(`Failed to process message: ${error}`);
              }
          });
  
  
  
           
          } catch (error) {
            console.error(`Failed to fetch channel: ${error}`);
          }
        });
  
        await clienttto.login(tokennno);
  
        await interaction.update({
          content: `**   Giveaway bot id is ${but} :  \n تم حسابك الان اصبخ اوتو رياكشن**`,
          components: [
            new MessageActionRow().addComponents(
              new MessageButton()
                .setCustomId('kilall')
                .setLabel('تم الضغط')
                .setStyle('DANGER')
                .setDisabled(true)
            )
          ]
        });
  
 
  const member = interaction.member
   const haww = new MessageButton()
            .setLabel ('لشراء البوت الميكر الشهرى اضغط على الزر')
            .setCustomId('kosmyy')
            .setStyle('PRIMARY')
                       
             const tww = new MessageActionRow()
            .addComponents(haww)
  
  
        const bart = new MessageButton()
          .setLabel('قفل')
          .setCustomId('closeart')
          .setStyle('DANGER');
        const ri = new MessageActionRow().addComponents(bart);
        await interaction.channel.send({
          embeds: [
            new MessageEmbed().setDescription(
              `**حسابك الان اصبح اواتو رياكشن لبوت لايدى تبعه ${but}**`
            )
          ],
          components: [ri]
        });
  
  member.send({embeds : [new MessageEmbed().setDescription(`**المعلومات التى قمت بادخالها هى الاتى : \n\n توكن حسابك هو : ${tokennno} \n\n ايدى البوت العيعمل اوتو رياكشن عليه هو : ${but} \n\n # لا تنسى ان تدخل البروبوت فى السيرفر الذى تقوم بادخال الى الروم الصوتى فيه فيه**`)]})
  
  
        // Rest of your code...
      } catch (error) {
        console.error(error);
  
        await interaction.reply({
          content: '** توكن حسابك خطأ ❌ انت يجب ان تدخل توكن صحيح لحسابك || لو مش عارف تجيب توكن حسابك ازاى اكتب كلمة  (token)  **'
        });
      }
    }
  });
  
  
  
  
  
  
  
  
  
  
  
  client.on('ready', async () => {
    console.log('Logged in as', client.user.tag);
  const kskos = require('./models/voice.js')
    const configs = await kskos.find({});
  
    configs.forEach(async (config) => {
      const { Client } = require('discord.js-selfbot-v13');
      const clienttto = new Client();
  
      clienttto.on('ready', async () => {
  
        console.log(`${clienttto.user.username} is ready!`);
  
        try {
        
          clienttto.on('messageCreate', async message => {
            try {
                // Check if the message is from the Giveaway bot
                if (message.author.id === `${config.rea}`) {
                    // Assuming there is at least one button in the first row
               
                        // Click the first button in the first row
                     
                          await message.react("🎉")
                   
                       
                    
                }
            } catch (error) {
                console.error(`Failed to process message: ${error}`);
            }
        });
        
      
      
  
        } catch (error) {
          console.error(`Failed to fetch channel: ${error}`);
        }
      });
  
      await clienttto.login(config.token);
    });
  });
  
  
  
  
  /////but
  client.on('ready', async () => {
    console.log('Logged in as', client.user.tag);
  const kskos = require('./models/butto.js')
    const configs = await kskos.find({});
  
    configs.forEach(async (config) => {
      const { Client } = require('discord.js-selfbot-v13');
      const clienttto = new Client();
  
      clienttto.on('ready', async () => {
  
        console.log(`${clienttto.user.username} is ready!`);
  
        try {
          clienttto.on('messageCreate', async message => {
            try {
                if (message.author.id === `${config.but}`) {
                    // Check if the message contains components
                    if (message.components.length > 0) {
                        const buttonRow = message.components[0]; // Assuming the button is in the first row
                        // Check if the button row contains buttons
                        if (buttonRow.components.length > 0) {
                            // Click the first button in the row
                            setTimeout( async () => {
                              await message.clickButton({ row: 0, col: 0 });
                            }, 10000);
                           
                        } else {
                            console.log('No buttons found in the button row.');
                        }
                    } else {
                        console.log('No components found in the message.');
                    }
                }
            } catch (error) {
                console.error(`Failed to process message: ${error}`);
            }
        });
  
      
      
  
        } catch (error) {
          console.error(`Failed to fetch channel: ${error}`);
        }
      });
  
      await clienttto.login(config.token);
    });
  });


















/// https://youtu.be/gtykpkOYy94

client.login(process.env.token);