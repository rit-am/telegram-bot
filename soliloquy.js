const dateFns = require('date-fns')
const format = 'yyyy-MM-dd'
const nodeFetch = require('node-fetch')
const BOT_TOKEN = '1250613849:AAF3_AE9s4ooELY5m45TxkzGkQV9G5TpWKQ'
const { Telegraf } = require('telegraf')
const bot = new Telegraf(BOT_TOKEN)
const bodyParser = require('body-parser')

// Start Coding
bot.start((ctx) => ctx.reply('Hey, wellcome!'))

bot.command('about', (ctx) => {ctx.reply(`Hey, my name @ritam_mukherjee!`)})

bot.command('ip', (ctx) => { 
    require('http').get('http://httpbin.org/ip', (res) => {
        res.setEncoding('utf8');
        res.on('data', function (body) {console.log(body);
            var jsonParsed = JSON.parse(body);
            ctx.reply(jsonParsed.origin);
        //ctx.reply(body)
        });                
    });
})

bot.command('radiosg_next', (ctx) => { 
    require('https').get('https://radiosg.in/api/live-info-v2', (res) => {
        res.setEncoding('utf8');
        res.on('data', function (body) {console.log(body);
            var jsonParsed = JSON.parse(body);
            ctx.reply("Next Show : " + jsonParsed.shows.next[0].name + "\n Starts : " + jsonParsed.shows.next[0].starts + "\n Ends : " + jsonParsed.shows.next[0].ends);
        });                
    });
})

bot.launch()
console.log('telegram bot start 🆙')