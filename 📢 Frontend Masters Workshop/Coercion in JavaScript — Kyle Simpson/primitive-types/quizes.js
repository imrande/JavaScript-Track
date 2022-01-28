// undefined and 'undefined' are different, String and 'string' are not same

var baz = 2
console.log(typeof baz) // 'number'

var baz // it declared in compile time but not in runtime so that's why baz is number
console.log(typeof baz) // 'number'

baz = null
console.log(typeof baz); // 'object'

baz = 'baz' * 3 // NaN, it's type 'number'
baz
console.log(typeof baz) // 'number'

baz = 1 / 0 // Infinity [typeof infinity is number]
baz
console.log(typeof baz) // 'number'
