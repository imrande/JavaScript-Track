// if variable is never been declared that state is called undeclared
// if variable is declared but not any value is assigned called undefined

let name = null
console.log(typeof(name)) // object
let name2 = undefined
name2;
console.log(typeof(name2)) // undefined