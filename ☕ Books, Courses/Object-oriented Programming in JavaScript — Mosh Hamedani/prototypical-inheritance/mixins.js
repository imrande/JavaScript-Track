// mixin is also known as composition

const canWalk = {
    walk() {
        console.log('Walking');
    },
};

const canEat = {
    eat() {
        console.log('Eating');
    },
};

const canSwim = {
    swim() {
        console.log('Swimming');
    },
};

function Mixin(target, ...sources) {
    Object.assign(target, ...sources); // it is copied everything from sources to target
}

function Person() {}
Mixin(Person.prototype, canWalk, canEat);

function Goldfish() {}
Mixin(Goldfish.prototype, canWalk, canSwim);

const goldfish = new Goldfish();
goldfish.swim();

const person = new Person();
console.log(person);
person.eat();