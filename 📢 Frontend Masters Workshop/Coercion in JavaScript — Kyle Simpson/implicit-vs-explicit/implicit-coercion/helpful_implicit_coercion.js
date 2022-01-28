/*
Notes =>

=== is faster than ==
use === where it's safer and use == where it's more helpful
use explicit coercion where it's safer and use implicit where it's more helpful
*/

// if u don't get help from coercion
var foo = '3'
if (foo == 3 || foo == '3'){
    alert('Thanks.. but')
}

// better line 
if (foo == 3){
    alert('yeah')
}


