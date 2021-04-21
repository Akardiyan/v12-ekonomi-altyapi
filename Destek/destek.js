const Discord = require('discord.js')
exports.run = function(client, message, args) {
let davet = new Discord.MessageEmbed()
.setTitle("Akardiyan Ekonomi | Destek")
.setDescription(`
**Bir Sorun Veya Sorunun Mu Var ?**

[≫ Destek Sunucumuza Katıl ≪](Destek Sunucunuzun Sınırsız Davet Linki)`)

return message.channel.send(davet)
  
};
exports.conf = {
    enabled: true, 
    aliases: ["destek"],
  };
  
  exports.help = {
    name: 'Destek'
  };
