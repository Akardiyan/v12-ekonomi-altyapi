const Discord = require("discord.js");
const db = require('quick.db')
const ayarlar = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {


  let user = message.mentions.users.first()
let money = args[1]    
  if(message.author.id !== ayarlar.botsahibi) return message.react("❌")
  if(!user) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`Cüzdanına para eklenecek kişiyi etiektlemelisin!`))

  if(!args[1]) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`⛔ Cüzdana eklenecek para miktarını girmelisin!`)) 

  if(isNaN(args[1])) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`⛔ Cüzdana eklenecek para miktarını girmelisin!`)) 

  if(args[1] < 0) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`🤔 Girdiğin miktar geçerli bir sayı değil !?`));    


message.channel.send(new Discord.MessageEmbed()
.setColor("GREEN")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`✅ ${user} kullanıcısının cüzdanına ${money} 💸 eklendi!`))
db.add(`para_${user.id}`, money)  
}
  
exports.conf = {
  enabled: true,
  aliases: ["para-ekle"],
};

exports.help = {
  name: 'Para Ekle',
};
 