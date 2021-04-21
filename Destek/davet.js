const Discord = require('discord.js')
exports.run = function(client, message, args) {
let davet = new Discord.MessageEmbed()
.setTitle("Akardiyan Ekonomi | Davet")
.setDescription(`
**Benden Zevk Alıp Eğleniyor Musun ?**

[≫ Beni Sunucuna Ekle ≪](Botunuzun Davet Linki)`)

  return message.channel.send(davet)
  
};
exports.conf = {
    enabled: true, 
    aliases: ["davet"],
  };
  
  exports.help = {
    name: 'Davet'
  };
