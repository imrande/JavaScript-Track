// Explicit : It's obvious(সুস্পষ্ট) from the code that you're doing it

let foo = "123px";
let baz = parseInt(foo, 10) // It's parse
console.log(baz) // 123

foo = "123"
baz = Number(foo) // 123 [Number() is preferable for casting]

// it's coerce from anything to number [unary operator]
baz = +foo
// baz = Number(foo) => same output as line 12
console.log(baz) // 123

baz = 456
// what is happing here => it's first call toString number obj and then call toString fn
foo = baz.toString()
console.log(foo) // "456"

foo = String(baz) // it called ToString abstract 
console.log(foo) // "456"