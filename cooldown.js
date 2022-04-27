module.exports = ({
  name: "cd",
  code:`
<@$authorID>
$addfield[1;Train:;$if[$get[train]>0; <:JS_cross:962157946614214676> $parseDate[$get[train];time];<:JS_check:962157982576156712> Ready];no]
$addfield[1;Work:;$if[$get[work]>0; <:JS_cross:962157946614214676> $parseDate[$get[work];time];<:JS_check:962157982576156712> Ready];no]
$addfield[1;Daily:;$if[$get[daily]>0;  <:JS_cross:962157946614214676> $parseDate[$get[daily];time];<:JS_check:962157982576156712> Ready];no]
$addfield[1;Drop:;$if[$get[drop]>0; <:JS_cross:962157946614214676> $parseDate[$get[drop];time];<:JS_check:962157982576156712> Ready];no]
$let[drop;$getCooldownTime[10m;globalUser;drop;$authorID]]
$let[daily;$getCooldownTime[1d;globalUser;daily;$authorID]]
$let[work;$getCooldownTime[60m;globalUser;work;$authorID]]
$let[train;$getCooldownTime[60m;globalUser;train;$authorID]]
`})  
