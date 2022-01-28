// use let inside of block scope and var function scope

var teacher = 'Kyle'

function name(){
    let teacher = 'Suzy'
    console.log(teacher) // => Suzy
}

name() 
console.log(teacher) // Kyle

// Swapping value
let x = 10
let y = 20

let swapping = function swapping(){
    let temp = x
    x = y
    y = temp
    console.log(x, y)
}

swapping()