/* 
Notes =>
Coercion means convert one value type to another value type

https://getify.github.io/coercions-grid/
https://davidwalsh.name/fixing-coercion
http://jscoercion.qfox.nl/
http://webreflection.blogspot.com/2010/10/javascript-coercion-demystified.html
https://jsperf.com/triple-equals-vs-double-equals/5

toString() is a string representation of specified string object

https://mzl.la/37A7DoI

let x = new String('Hello, WOrld') // string object
console.log(x.toString()) // Hello, World

toString Operation
console.log(toString(null))
*/

console.log(String(52)) // '52'
console.log(toString(null)) // '[object Undefined]'

var a = {
    'lan': 'JavaScript'
}
console.log(a.toString()) // '[object Object]'
console.log(String(a)) // '[object Object]'

console.log()

// https://tc39.es/ecma262/#sec-tostring
console.log(String(undefined)) // 'undefined'

console.log(String(1 + null)) // '1'
console.log(String(1 + undefined)) // 'NaN' WTF???
console.log(String(undefined)) // 'undefined'
console.log(String(null)) // 'null'
console.log(String(1 + true)) // '2'
console.log(String(1 + false)) // '1'
console.log(
    String( // NaN
        a = {
            'x': 10
        }
    )
)

console.log(String('Str')) // 'Str'
console.log(String(Number())) // '0' ???
console.log(String(String())) // ''
console.log(String(Boolean())) // 'false'
console.log(String(
    function a(){
        console.log('Hi')
    }
)) // return full fn surrounded ''

let x = (value) => {
    console.log(String(value))
}
  
x([1, 2, 3]) // '1, 2, 3'
x([]) // ''
x([null, undefined]) // ','
x([,,,,,]) // ',,,,'
x({}) // '[object Object]'

// toString()
let xx = (value) => {
    console.log(value.toString())
}
  
xx([1, 2, 3]) // '1, 2, 3'
xx([]) // ''
xx([null, undefined]) // ',' // bad design
xx([,,,,,]) // ',,,,' // Bad design 
xx({}) // '[object Object]'
