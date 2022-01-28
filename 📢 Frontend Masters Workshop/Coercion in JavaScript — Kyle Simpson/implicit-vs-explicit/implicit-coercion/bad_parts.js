'0' == null // false
'0' == undefined // false
'0' == false // true -- WTF
'0' == NaN // false
'0' == 0 // true
'0' == 0 // false

false == null // false
false == undefined // false
false == NaN // false
false == 0 // true --
false == '' // true --
false == [] // true --
false == {} // false

'' == null // false
'' == undefined // false
'' == NaN // false
'' == 0 //true --- WTF
'' == [] // true --
'' == {} // false

0 == null //false
0 == undefined // false
0 == NaN // false
0 == [] // true --
0 == {} // false