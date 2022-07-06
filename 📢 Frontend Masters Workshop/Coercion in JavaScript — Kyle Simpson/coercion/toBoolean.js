/* 
Notes ==>
abstract operations are not part of the language but are used to aid the specification of 
the semantics of JavaScript language. You can think of these operations as conceptual operations.

abstract operation `ToBoolean` converts its argument to a value of type Boolean
undefined becomes false
null becomes false
Boolean becomes equal to input arg
Number becomes [0, -0 ,+0 => false], other true
String becomes true except empty ['']
object is true WTF???
*/

let x = (value) => {
    console.log(Boolean(value))
}
  
x(0) // false
x(+0) // false
x(-0) // false
x(null) // false
x(undefined) // false
x(false) // false
x(NaN) // false
x('') // false
x([]) // true
x({}) // true
x('f00') // true
x([1]) // true
