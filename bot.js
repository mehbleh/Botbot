const Discord = require('discord.js');
const logger = require ('./logger.js'); 

let auth = require('./auth.json');

//Testing around using discord.js

const client = new Discord.Client();

//Activate the client
logger.appLog.log('info', 'Starting botbot');
client.on('ready', () => {
    logger.appLog.log('info', 'Starting botbot');
});

// Logging in the bot
client.login(auth.token)
    .then(logger.appLog.info('Logged in'))
    .catch(logger.appLog.error)

// Create an event listener for messages
client.on('message', message => {
    logger.appLog.info(message.author + " has sent a command: " + message.content);
    if(message.content.substring(0,1)=='!'){
        var args = message.content.substring(1).split(' ');
        var cmd = args[0];

        switch(cmd){
            case 'ping':
                logger.appLog("Testing ping/pong message response.");
                message.channel.send('pong');
                break;
            case 'tag':
                message.reply("Your tag is: " + message.author.tag);
                break;
            default:
                logger.appLog.info(message.author + " sent an invalid command: " + cmd);
                message.reply("Invalid command.");
                break;
        }
    }
  });