module.exports = {
name: "favorite",
aliases: ["fav"],
$if: 'v4',
code:`
$author[1;Setting your fav card - $userTag]
$if[$message==$message[1]]

$description[1;**$userTag** You have setted your fav card :

$getGlobalUserVar[$message[1]_RARITY] \`$message[1]\` $getGlobalUserVar[$message[1]_NAME]

$setGlobalUserVar[FAVCARD;$message[1]]

$onlyif[$getGlobalUserVar[$message[1];$authorID]>0;  you don't have **$message[1]** in your inventory]
$suppressErrors[Invalid Card code! Please check the Card Codes]
$endif
`
}