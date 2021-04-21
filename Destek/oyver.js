const Discord = require('discord.js')
exports.run = function(client, message, args) {
let davet = new Discord.MessageEmbed()
.setTitle("Akardiyan Ekonomi | Oyver")
.setDescription(`
**Beni Desteklemeye Ne Dersin ?**

[≫ Bana Oy Ver ≪](Botunuzun Oy Verme Linki)`)
  return message.channel.send(davet)
  
};

exports.conf = {
    enabled: true, 
    aliases: ["oy-ver"],
  };
  
  exports.help = {
    name: 'Oy Verme'
  };

