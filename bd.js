module.exports = {
name: "bd",
aliases: ["bd" , "bdrp"],
code:`
$setGlobalUserVar[BDROPP;$randomtext[JAEHYUN;yongf;precious;]]
$setVar[$getGlobalUserVar[BDROPP]_OWNERS;$sum[$getVar[$getGlobalUserVar[BDROPP]_OWNERS];1]]
$setGlobalUserVar[$getGlobalUserVar[BDROPP];$sum[$getGlobalUserVar[$getGlobalUserVar[BDROPP]];1]]
$setGlobalUserVar[card;$sum[$getGlobalUserVar[card];1]]
<@$authorID>
$description[1;<:JS_cards:967919918567800892> - You have dropped:
$getGlobalUserVar[BDROPP]
Card : 
<:JS_whitearrow:962157618292457553> Group : $getGlobalUserVar[$getGlobalUserVar[BDROPP]_GROUP]
<:JS_whitearrow:962157618292457553> Name : $getGlobalUserVar[$getGlobalUserVar[BDROPP]_NAME]
<:JS_whitearrow:962157618292457553> Era : $getGlobalUserVar[$getGlobalUserVar[BDROPP]_ERA]
<:JS_whitearrow:962157618292457553> Rarity : $getGlobalUserVar[$getGlobalUserVar[BDROPP]_RARITY]
$image[1;$getGlobalUserVar[$getGlobalUserVar[DROPP]_IMAGE]]
Stats : 
Card Print : #$sum[$getVar[$getGlobalUserVar[BDROPP]_OWNERS];1]
$color[1;#303135]
$globalCooldown[5s; You are on cooldown for **%time%** ]
$addTimestamp[1]
`
}