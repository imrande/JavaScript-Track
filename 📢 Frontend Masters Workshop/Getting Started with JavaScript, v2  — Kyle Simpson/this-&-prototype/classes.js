// ES6 class

class Workshop {
    constructor(teacher) {
        this.teacher = teacher;
    }
    ask(question) {
        console.log(this.teacher, question); 
    }
}

var deepJs = new Workshop('Kyle')
var vueJs = new Workshop('Suzy')

deepJs.ask(`Is 'Prototype' a class`) // Kyle Is 'Prototype' a class
vueJs.ask(`Isn't 'prototype' ugly?`) // Suzy Isn't 'prototype' ugly?