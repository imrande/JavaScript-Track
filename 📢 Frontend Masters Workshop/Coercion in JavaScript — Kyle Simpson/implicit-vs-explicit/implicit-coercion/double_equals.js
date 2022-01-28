var foo = '123'
// foo convert 123 and true becomes 1 [1 == 123]
if (foo == true){
    console.log('WAT!!')
}  

foo = []
if (foo){
    console.log('Sure!!')
}

// if foo == false then it convert like this [] => "" => 0 [0 == 0]
if (foo == false){
    console.log('WAIT!!')
}

// strongly recommend using explicit boolean con for true and false

// Never ever use == false or == true