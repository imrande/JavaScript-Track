// NaN is not a Number, rather than it is invalid numeric value
// null is a keyword and undefined is identifer

'use strict'
let x = void 45
console.log(x) // undefined

let y = void [1,2,3]
console.log(y) // undefined

let z = void '45'
console.log(z) // undefined

try {
    let a = 'a' / 2
    console.log(a); // NaN
    console.log(typeof a) // 'number' [typeof invalid number is a number]
} catch {
    console.log('Invalid Numerical Operation')
}

console.log(isNaN('cool')) // Bug - 'cool' is not a number [true]
console.log(NaN === NaN) // false [WTF]
