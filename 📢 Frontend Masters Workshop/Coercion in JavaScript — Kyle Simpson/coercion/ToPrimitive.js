/* 
Notes =>
Every non-primitive can have two methods available: toString and valueOf. 
If 'number' hint is sent, valueOf() method is invoked first. And 
if we get a primitive type from the result then we are done. 
But if the result is again a non-primitive, toString() gets invoked. 
Similarly, in the case of 'string' hint type, the order of these 
operations is reversed. If the invocation of these two operations doesn't 
return a primitive, generally it's a TypeError.

ToPrimitive abstract operation is performed with "number"

hint: "number" 
valueOf()
toString()

hint: "string"
toString()
valueOf()

Whenever we receive a non-primitive value for 
an operation where a primitive type was expected, ToPrimitive abstract operation is invoked.

https://dev.to/aman_singh/abstract-operations-the-key-to-understand-coercion-in-javascript-453i#toprimitive
*/

console.log([] + 5) // 5
/*
Steps =>
[].valueOf() => []
[].toString() => ''
'' + 5 == 5
*/

console.log({} + []) // 0
console.log([] + {}) // "[object Object]"
console.log('=======')
console.log([] + []) // ""
console.log({} + {}) // [object object] [object object]
console.log([] + {}) // "[object object]"
console.log(null + []) // "null"
console.log(null + {}) // "null[object Object]"

console.log(0 + "") // 0 [empty string is 0]
console.log("" + "") // blank ?? what

console.log('' - true) // -1 [0-1]
console.log(1 < 2 < 3) // (1 < 2) < 3 === true < 3 == true
