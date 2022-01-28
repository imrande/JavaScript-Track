// Scope - where the js enginees looks for things

var teacher = 'Kyle'

function otherTeachers(){
    teacher = 'Suzy'

    // it was created implicit outer 'topic' variable, that's why it is accessible from outer and inner scope.
    // it is not declared anywhere so it will hoisting in outer scope
    // crete new variable in outer scope so that it can reference
    topic = 'Vue.js'
}

console.log(topic) // error [topic is not defined]
otherTeachers()
console.log(teacher) // Suzy
console.log(topic) // Vue.js 
console.log(teacher) // suzy