/*
Notes ==>

String
Boolean
Number
Function
Object
Array
RegexExp
Date
Error

=> those are all not native types, they are kinda native objects
String(), Boolean(), Number() are for type coercion, don't use "new" in front of any of it
*/

var foo = new String('foo') // constructor form of string
console.log(foo) // [String: 'foo'], don't use => [String {'foo'} in browser]
console.log(typeof foo) // 'object'
console.log(foo instanceof String) // true
// console.log(foo instanceof 'string') => TypeError

foo = new Number(37) // constructor form of number
let fox = Number('45')
console.log(fox) // 45
console.log(foo) // [Number: 37],don't use => [Number {37} in browser]

fox = new Boolean(true) // constructor form of boolean
console.log(fox); // [Boolean: true] [don't use]
console.log(typeof fox) // 'object' => since it is constructor form

var f = new Array(1,2,3) // don't use this type code. terrible idea
console.log(f) // [1, 2, 3]
console.log(typeof f) // 'object'
let new_array = [] // use this
console.log(new Array(42)) // showing length of array, don't know why

var x = new Object() // don't use such types, awful Idea
x._1 = 'One'
x._2 = 'Two'
console.log(x)

// do this type
let xx = { 
    _1: 'One',
    _2: 'Two'
}
console.log(xx)

let regex = new RegExp('a*b', 'g')
console.log(regex) // it's dynamic type regex
regex = /a*b/g
console.log(regex) // it's static type regex [it's much prefer]

let date = new Date()