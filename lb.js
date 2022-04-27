module.exports = ({ 
  name: "leaderboard", 
  aliases: ['lb'],
  description: "Check the money leaderboard",
  usage: "",
  category:"economy", 
  code: `$title[1;Card LB] $description[1;$globalUserLeaderBoard[card;asc; {top}. **{username}**- {value}]] 
$cooldown[5s;A bit too fast there. Wait for **time%**!}] $onlyIf[$checkContains[$channelType;text;news]==true;]
`
})