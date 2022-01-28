var foo = '123'
var baz = Boolean(foo) // true 
console.log(baz)

baz = !!foo // coerces to boolean , invoke ToBoolean abstract
console.log(baz) // true

// never ever do that
baz = foo ? true : false
console.log(baz) // true

// ~N => -(N+1)
if (~'foo'.indexOf('f')){ // since f's index is 0 and 0 is falsy so, we converted it to truthy
    console.log('Found at')
}