/* 
Notes ==>
To Number Abstract Operation handles value conversion 
when a non-number value is being coerced into a numeric one

null is coerced to +0.
true is coerced to 1.
false is coerced to 0.
undefined is coerced to NaN.
Boolean => If argument is true, return 1. If argument is false, return +0.
Symbol	Throw a TypeError exception.
BigInt	Throw a TypeError exception.

For object and array, values are first converted to their primitive value 
equivalent (via ToPrimitive operation) and the resulting value is then 
coerced into number according to the ToNumber abstract operation
*/

// https://tc39.es/ecma262/#sec-tonumber
console.log(1 + null) // 1, null === 0
console.log(1 + undefined) // NaN, undefined NaN
console.log(Number(undefined)) // NaN
console.log(Number(null)) // 0
console.log(1 + true) // 2
console.log(1 + false) // 1
console.log(Number(null)) // 0
console.log(
    Number( // NaN
        a = {
            'x': 10
        }
    )
)

console.log(Number('Str')) // NaN
console.log(Number(Number())) // 0 ???
console.log(Number(String())) // 0 ???
console.log(Number(Boolean())) // 0 ???
console.log(Number(
    function a(){
        console.log('Hi')
    }
)) // NaN ???
