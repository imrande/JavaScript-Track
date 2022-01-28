// Prototype means that it is an object where any instances are going to be linked or delegate to

function Workshop_(teacher){
    this.teacher = teacher
}

Workshop_.prototype.ask = function(question){
    console.log(this.teacher, question)
}

var deepJs = new Workshop_('Kyle')
var vueJs = new Workshop_('Suzy')

deepJs.ask(`Is 'Prototype' a class`)
vueJs.ask(`Isn't 'prototype' ugly?`)