// Falsy Value
console.log(Boolean(0)) // => false
console.log(Boolean(-0)) // => false
console.log(Boolean('')) // => false
console.log(Boolean()) // => false
console.log(!!null) // => false [same as Boolean]
console.log(!!undefined) // => false
console.log(!!false) // => false

console.log() // new line

// Truthy Value
console.log(Boolean(function x(){})) // => true
console.log(Boolean('foo')) // => true
console.log(Boolean(2)) // => true
console.log(Boolean({})) // => true
console.log(Boolean([])) // => true
console.log(!!Symbol()) // => true
console.log(!!-5) // => true

// old way
if (studentsInputEle.value){ 
    numStudents = Number(studentsInputEle.value)
}

while (newStudents.length){
    enrollStudents(newStudents.pop())
}

// best practice
if (!!studentsInputEle.value){ // explicitly conversion
    numStudents = Number(studentsInputEle.value)
}

while (newStudents.length > 0){
    enrollStudents(newStudents.pop())
}