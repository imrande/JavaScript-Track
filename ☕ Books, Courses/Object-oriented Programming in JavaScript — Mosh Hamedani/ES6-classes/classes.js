/*

function Circle(radius) {
    this.radius = radius;

    this.click = function() {
        console.log('clicked');
    };
}

*/

// ES6 class version
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // it goes to inside prototype
    click() {
        console.log('clicked');
    }
}

const c = new Circle(1);
console.log(typeof c); // object
console.log(typeof Circle); // function


// unlike function, class are not hoisted
// class declaration (strick with it)
class C {}

// class expression
const square = class {};