module.exports = {
name: 'view', 
aliases: ['v'], 
$if: 'v4', 
code:`$author[1;Viewing a card - $userTag]
$if[$message==$message[1]]
$description[1; **$usertag**, You are viewing \`$message[1]\`.
<:JS_whitearrow:962157618292457553> **Group** : $getGlobalUserVar[$message[1]_GROUP]
<:JS_whitearrow:962157618292457553> **Name** : $getGlobalUserVar[$message[1]_NAME]
<:JS_whitearrow:962157618292457553> **Era** : $getGlobalUserVar[$message[1]_ERA]
<:JS_whitearrow:962157618292457553> **Rarity** : $getGlobalUserVar[$message[1]_RARITY]
Stats : 
Card Print : \`#$getVar[$message[1]_OWNERS]\`
Card copies : \`$getGlobaluservar[$message[1]]\`
$image[1;$getGlobalUserVar[$message[1]_IMAGE]]
$onlyif[$getGlobalUserVar[$message[1];$authorID]>0; <$authorID>, you don't have **$message[1]** in your inventory.]
$suppressErrors[ Please check the Card Codes]
$endif
`
}