const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');
exports.run = function(client, message, args) {
let davet = new Discord.MessageEmbed()
.setTitle("Akardiyan Ekonomi | Yapımcım")
.setDescription(`
**Botu Kodlayan** | **\`Botu Kodlayan Kişinin Adı\`**

**Botun Sahibi** | **<@Bot Sahibin İD>**`)
  return message.channel.send(davet)
  
};
exports.conf = {
    enabled: true, 
    aliases: ["yapımcım"],
  };
  
  exports.help = {
    name: 'Yapımcım'
  };