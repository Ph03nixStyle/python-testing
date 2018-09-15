const Discord = require('discord.js');

const bot = new Discord.Client();
const http = require('http');
const https = require("https")
const express = require('express');
const app = express();
const cooldown = [];
const bs = require('./bs.json');
app.get("/", (request, response) => {
 console.log(Date.now() + " Ping Received");
});
const Canvas = require("canvas");
var g = bot.guilds.get('437355624750383114');
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);

const prefix = ';'
const fs = require("fs");
const mn = require('./messnumber.json');
function getPerm(id) {
var ids = {"334095574674571264" : {},
           
           "285832267216191498" : {}
          }
if (!ids[id]) return false;
  return true;
}
function clean(text) {
  if (typeof(text) === "string") return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else return text;
}
function loadImage (url) {
  return new Promise((resolve, reject) => {
    const img = new Canvas.Image()

    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error('Failed to load image'))
    if(url.startsWith("https://")){
      https.get(url, (res) => {
        let chunks = []

        res.on('error', (err) => { reject(err) })
        res.on('data', (chunk) => { chunks.push(chunk) })
        res.on('end', () => { img.src = Buffer.concat(chunks) })
      })
    }else{
      http.get(url, (res) => {
        let chunks = []

        res.on('error', (err) => { reject(err) })
        res.on('data', (chunk) => { chunks.push(chunk) })
        res.on('end', () => { img.src = Buffer.concat(chunks) })
      })
    }
  })
}
function getTeam(guild, member) {
//let role1 = guild.roles.get("460123429299814431")
//let role2 = guild.roles.get("460124196937138188")
if (member.roles.get("460123429299814431")) return 1;
if (member.roles.get("460124196937138188")) return 2;
  return false;
}
function xpfy(message) {
if (message.guild) {
    if (message.channel.id == 460694904373510154) return;
 
  if (getTeam(message.guild, message.member) == 1) {
  if (!mn[message.author.id]) mn[message.author.id] = {
  num : 0,
  team : 1
  }
  bs.weekly.fire++
    fs.writeFile("./bs.json", JSON.stringify(bs), (err) => "");
    mn[message.author.id].num++
  fs.writeFile("./messnumber.json", JSON.stringify(mn), (err) => "");
return true + 1 ;
  }
  if (getTeam(message.guild, message.member) == 2) {
   if (!mn[message.author.id]) mn[message.author.id] = {
  num : 0,
  team : 2
  }
  bs.weekly.water++
        fs.writeFile("./bs.json", JSON.stringify(bs), (err) => "");
    mn[message.author.id].num++
  fs.writeFile("./messnumber.json", JSON.stringify(mn), (err) => "");
return true + 2 ;
  }
     }
    }
bot.on('guildMemberUpdate', function(oldMember, newMember) {
if ( (!getTeam(g, oldMember)) && getTeam(g, newMember)) {
if (getTeam(g, newMember) == 1) {
bot.channels.get('435918086932004864').send("**[TEAM JOIN LOG]**\n" + newMember.id + " joined fire")
var wat = new Discord.Attachment('https://cdn.discordapp.com/attachments/389513734281887745/466170930188779540/giphy.gif', 'fire.gif')
bot.channels.get('466140616284438529').send("**" + newMember.displayName + "** joined fire :fire:", wat)
}
else if (getTeam(g, newMember) == 2) {
bot.channels.get('435918086932004864').send("**[TEAM JOIN LOG]**\n" + newMember.id + " joined water")
var wat2 = new Discord.Attachment('https://cdn.discordapp.com/attachments/389513734281887745/466170930721325056/1KwB.gif', 'water.gif')
bot.channels.get('466140763248656394').send("**" + newMember.displayName + "** joined water :ocean: ", wat2)
}
}
})
bot.on('guildMemberRemove', (member) => {
bot.channels.get('434758552414846977').send(`${member.user.username} left us.... We'll miss you ${member.user.username} :(`);
})
bot.on('guildMemberUpdate', (newMember) => {
console.log(newMember.roles);
})
bot.on('guildMemberAdd', (member) => {
bot.channels.get('434758552414846977').send(`Welcome  **${member.guild.name}** ${member}. Go to <#461557122224750592> to choose your side, and  don't forget to read the <#434699790828306442> & <#434699869626695682>. Enjoy your stay! 😉`)
})
bot.on("message", async (message) => {
if (message.channel.id == '459989543299448832'){
if (message.content.includes('@everyone') || message.content.includes('@here')) message.channel.send("Go to <#461557122224750592> to disable partner pings.")
}
if (message.author.bot) return;

              if (cooldown.indexOf(message.author.id) === -1) {
                      cooldown.push(message.author.id);
  setTimeout(() => {
    cooldown.splice(cooldown.indexOf(message.author.id), 1);
  }, 5000);
xpfy(message)
              }
if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(" ").slice(1);
if (message.content.startsWith(prefix + "dailyboard")) {
var e = new Discord.RichEmbed()
  .setTitle("Daily Board.")
  .addField("Fire"  + (bs.weekly.fire > bs.weekly.water ? " :medal:" : " "), bs.weekly.fire)
  .addField("Water"  +  (bs.weekly.fire < bs.weekly.water ? " :medal:" : " "), bs.weekly.water)
message.channel.send(e)

}
if (message.content.startsWith(prefix + "gboard")) {
 let array = Object.keys(mn)
array.sort( function sort(a, b){
return (mn[b].num - mn[a].num)
})
let cache = ""
let count = 1
let filter;
  if (args[0] == "f") filter = 1
  else if (args[0] == "w") filter = 2
if (filter) {
for (let i in array) {
if (count  < 10) if (mn[array[i]].team == filter)  {
cache += "\n**#" + count + ".  <@" + array[i] + "> : " + mn[array[i]].num + " " + (mn[array[i]].team == 2 ? ':sweat_drops:** ' :':fire:** ' )
count++;
                                                  }
}
} else {
for (let i in array) {
if (count  < 10) cache += "\n**#" + count + ".  <@" + array[i] + "> : " + mn[array[i]].num + " " + (mn[array[i]].team == 2 ? ':sweat_drops:** ' :':fire:** ' )
count++;
}
}
  message.channel.send(new Discord.RichEmbed().setDescription(cache))
}

if (message.content.startsWith(prefix + "board")) {
let fnum = 0
let wnum = 0
let flimit = 0 
let wlimit = 0
var fboy;
var wboy;
var fnumber = 0
var wnumber = 0
 for (let mes in mn) {
if (mn[mes].team == 1)  {
  fnumber++
  fnum += mn[mes].num 
  if (mn[mes].num > flimit) { 
fboy = mes
flimit = mn[mes].num
}
}
if (mn[mes].team == 2) {
  wnumber++
  wnum += mn[mes].num
  if (mn[mes].num > wlimit)  {
wboy = mes
wlimit = mn[mes].num
}
}
}
      
let e = new Discord.RichEmbed()
  .setTitle("Actual board.")
  .addField("Water points"  + (wnum > fnum ? '  :medal:' : ' '), wnum, true)
  .addField("Water Leader :", bot.users.get(wboy), true)
  .addField("Water participants ", wnumber, false)
  .addField("Fire points" + (fnum > wnum ? '  :medal:' : ' '),  fnum, true)
  .addField("Fire leader :", bot.users.get(fboy), true)
  .addField("Fire participants", fnumber, false)
message.channel.send(e)
}
if (message.content.startsWith(prefix + "rank")) {
let mem = message.mentions.users.first() || message.author

if (!mn[mem.id]) xpfy(message)
let image;
if(mn[mem.id].team == 2)  image = 'https://www.freeiconspng.com/uploads/fire-pop-26.png'
/*let canvas = new Canvas(250, 250)
let ctx = canvas.getContext("2d")
loadImage(message.author.avatarURL).then(img1 => {
loadImage(image).then(img2 =>{
ctx.drawImage(img1, 0, 0, 250, 250)
ctx.drawImage(img2, 0, 0, 250, 250)
message.channel.send({files:[{attachment:canvas.pngStream(), name: "image.png"}]})
})
})*/
let e = new Discord.RichEmbed()
  .setTitle("Rank of " + mem.username)
  .addField("Number of points", mn[mem.id].num)
  .addField("Registered as ", (mn[mem.id].team == 2 ? 'Water :sweat_drops: ' :'Fire :fire: '  ))
  .setColor((mn[mem.id].team == 2 ? "#0000FF" : "#FF0000"))
message.channel.send(e)
}
if (message.content.startsWith(prefix + "ping")) {
message.channel.send("Pong,\n API : " + bot.ping + "\nBot : " + `${Date.now() - message.createdTimestamp} ms` )
}
if (message.content.startsWith(prefix + "setgame")) {
if (!getPerm(message.author.id)) return message.channel.send("Nope :x:")
  let game = args.join(" ");
   bot.user.setActivity(game, {'type': 'PLAYING'})
message.channel.send("Mon statut actuel est de " + game)
}
if (message.content.startsWith(prefix + "say")) {
if (!getPerm(message.author.id)) 
  return message.channel.send("Nope :x:")
let saytext = args.join(" ");
if (!saytext) {
    message.delete();
  return message.channel.send("Ur mom gey.")
}
message.channel.send(saytext);
  message.delete();
}
  if (message.content.startsWith(prefix + "eval"))
  {
    if (!getPerm(message.author.id)) return message.channel.send("Nope :x:")
        const code = args.join(" ");
      if(code.indexOf("process.env.TOKEN") !== -1) return message.channel.send("Tentative de vol de token ? Tu me fais peur, toi.");
        try {
          let evaled = eval(code);
          if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);

          let evalembed = new Discord.RichEmbed()
.setTitle('Eval code')
.addField(`Input : `, `\`\`\`js\n ${code} \n\`\`\``)
.addField(`Output : `, `\`\`${clean(evaled)}\`\``)
.setColor('#47ff05')
message.channel.send(evalembed)
        } catch (err) {
         let evalembed = new Discord.RichEmbed()
.setTitle('Eval code')
.addField(`Input : `, `\`\`\`js\n ${code} \n\`\`\``)
.addField(`**Erreur :**`,`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``) 
.setColor('#ff0505')
message.channel.send(evalembed)
        }
  
  
  }
})
bot.on("ready", () => 
       {
console.log("Je suis prêt owo.")
setInterval(() => {
if (bs.time == Date.now())  {
bs = {
weekly : {
water : 0,
fire : 0
},
time : Date.now() + 24*60*60
}
fs.writeFile('./bs.json', JSON.stringify(bs));
             }
}, 300000)
})

bot.login(process.env.TOKEN);