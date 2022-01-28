/*
Core Types =>
1) undefined
2) string
3) number [integer, float]
4) boolean
5) object [(function, array, null) subtype of object]

null is empty object value and undefined is empty value...
*/

'use strict'
console.log(typeof(cool)) // 'undefined'
console.log(typeof('cool')) // 'string'
console.log(typeof(123)) // 'number'
console.log(typeof(['cool'])) // 'object' 
console.log(typeof(null)) // 'object'
console.log(typeof({'a': 1})) // 'object'
console.log(typeof(function x(){})) // 'function'

console.log()

// Quiz
var foo
console.log(typeof(foo)) // 'undefined' [it's not same as undefined value]

var bar = typeof(bar)
bar // 'undefined'
console.log(bar) // 'undefined'
console.log(typeof(bar)) // 'string'

console.log(typeof(typeof(2))) // 'string'