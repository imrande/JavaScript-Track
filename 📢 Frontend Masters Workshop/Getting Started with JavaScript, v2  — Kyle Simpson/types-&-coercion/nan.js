// NaN => it's not actually 'not a number' rather invalid numerical operation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN

var greeting = 'Hello, class!'
let something = greeting / 2
console.log(something) // NaN

let typeCheck = Number.isNaN(something)
console.log(typeCheck) // => true