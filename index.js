const Discord = require('discord.js');
const Senryu = require('./lib/senryu')

const client = new Discord.Client();
require('dotenv').config()

client.on('message', message => {
  new Senryu(message.content)
    .isSenryuAsync()
    .then(res => message.channel.send(`ここで一句「${res}」`))
    .catch(_ => _)
});

client.login(process.env.TOKEN);
