/*
this keyword references what we would call an 'execution context' for when the function called (It references when the function is called and doesn't care where the function is)

A this-aware function can thus have a different context each time it's called
which makes it more flexible and reusable (each time its called context would
be different)

there has 4 rules how this keyword determine
1) implicit binding rules
2)
3)
4)
*/

let workshop = {
    teacher : 'Kyle', // property
    ask(question){ // its called this aware function, ask is method
        console.log(this.teacher, question) // kyle what is implicit binding
    }
}

workshop.ask(`What is implicit binding?`) // this care when its called

function ask_(question_){
    console.log(this.teacher, question_) // implicit binding
}

function otherClass(){
    let myContext = {
        teacher: 'Suzy'
    }
    // myContext reference this and teacher references context teacher
    ask_.call(myContext, 'why?') // suzy why?
}

otherClass()