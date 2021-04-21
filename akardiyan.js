const discord = require('discord.js');
const fs = require('fs');
const http = require('http');
const db = require('quick.db');
const moment = require('moment')
const express = require('express');
const ayarlar = require('./ayarlar.json');
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.TOKEN)

client.on('ready', async () => {
  
 client.user.setActivity(`V12 | Akardiyan Ekonomi Altyapı`, { type:'PLAYING' })
  
  console.log(`Akardiyan Tarafından Yapılmış Ekonomi Altyapısı <3`)
});

const log = message => {
  console.log(` ${message}`);
};
require('./util/eventLoader.js')(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./Destek/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} Destek Komutları Hazırlanıyor...`);
    files.forEach(f => {

        let props = require(`./Destek/${f}`);
        log(`${props.help.name} komutu hazır !`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./Destek/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./Ekonomi/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} Ekonomi Komutları Hazırlanıyor...`);
    files.forEach(f => {

        let props = require(`./Ekonomi/${f}`);
        log(`${props.help.name} komutu hazır !`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./Ekonomi/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./Oyunlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} Oyun Komutları Hazırlanıyor...`);
    files.forEach(f => {
        let props = require(`./Oyunlar/${f}`);
        log(`${props.help.name} komutu hazır !`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./Oyunlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};
