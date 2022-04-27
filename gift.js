module.exports = {
name: 'gift', 
aliases: ['g'], 
$if: 'v4', 
code:`
$author[1;Sending a gift - $userTag[$authorID];https://media.discordapp.net/attachments/961868978299486208/967724710542594058/received_1239525546451280-removebg-preview.png]
$if[$message==$message[1] $message[2]]
$description[1;**$userTag[$authorID]** sent you a gift <@$mentioned[1;yes]> :
$getGlobalUserVar[$message[2]_RARITY] \`$message[2]\` $getGlobalUserVar[$message[2]_NAME]

$setGlobalUserVar[$message[2];$sum[$getGlobalUserVar[$message[2];$mentioned[1;yes]];1];$mentioned[1;yes]]
$setGlobalUserVar[$message[2];$sub[$getGlobalUserVar[$message[2];$authorID];1];$authorID]
$setGlobalUserVar[card;$sub[$getGlobalUserVar[card;$authorID];1];$authorID]
$setGlobalUserVar[card;$sum[$getGlobalUserVar[card;$mentioned[1;yes]];1];$mentioned[1;yes]]
$color[1;#2f3136]
$onlyif[$getGlobalUserVar[$message[2];$authorID]>0; <$authorID> you don't have **$message[2]** in your inventory]
$suppressErrors[Error Gifting! Please check the Card Codes]
$endif
`
}