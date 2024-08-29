const { Telegraf } = require('telegraf');
require('dotenv').config();
const axios = require('axios');

const bot = new Telegraf(process.env.BOT_TOKEN);

console.log('Bot instance created');

let binarySearch = `export function binarySearch(arr, x){
    let l = 0, h = arr.length - 1;
    while(l <= h){
        let mid = l + Math.floor((h-l)/2);
        if(arr[mid] == x) return mid;
        else if(arr[mid] < x) l = mid+1;
        else h = mid-1;
    }
    return undefined;
}`

bot.start((ctx) => {
    console.log('Start command received');
    ctx.reply("Welcome to Garvit's bot, key haal hai");
});

bot.command('binarytreejs', async (ctx)=>{
    const response = await axios.get('https://raw.githubusercontent.com/singhsanket143/FrontendDSA/master/Aug_29/trees.js');
    ctx.reply(response.data);
})

bot.command('test', (ctx) => {
    console.log('Test command received');
    ctx.reply('Test command received');
});

bot.command('binarysearch', (ctx) => {
    ctx.reply(binarySearch);
})

bot.on('sticker', (ctx) => {
    console.log('Sticker received:', ctx.message.sticker);
    ctx.reply('❤️');
});

bot.command('radhasoami', (ctx) => ctx.reply("Radha soami ji 🙏"));

// Handle any text message
bot.on('text', (ctx) => {
    console.log('Text message received:', ctx.message.text);
    console.log('ctx object is: ', ctx);
    if(ctx.message.text == "i love you"){
        ctx.reply("i love you too ❤️");
    }
    else{
        ctx.reply("I don't understand humans.");
    }
    
    
});

bot.launch().then(() => {
    console.log('Bot launched successfully');
}).catch((error) => {
    console.error('Failed to start the bot:', error);
});
