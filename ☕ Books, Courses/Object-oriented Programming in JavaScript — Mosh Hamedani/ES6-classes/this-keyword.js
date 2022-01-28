const Circle = function() {
    this.draw = function() {
        console.log(this);
    }
}

const c = new Circle();
// method call
c.draw(); // Circle object

// function
// when we call a variable as a function by default `this` point to window
const x = c.draw;
x(); // window ?

// what about inside class
// by default class is running in `strict mode`
class Shape {
    constructor() {
        this.draw = function() {
            console.log(this);
        }
    }
}

const s = new Shape();
s.draw(); // Shape

const y = s.draw;
y(); // undefined