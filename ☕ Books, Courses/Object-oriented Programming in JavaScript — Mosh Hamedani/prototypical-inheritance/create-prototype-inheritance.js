function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log('Hello');
};

// constructor
function Circle(radius, color) {
    Shape.call(this);
    this.radius = radius;
    this.color = color;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
    console.log('draw');
};

// when we set `new` in front of function, 3 things happened
// 1) It's create an new Empty Object {}
// 2) `this` point to that Object
// 3) Finally Object return from the constructor
const c = new Circle(10, 'red');
console.log(c);
c.draw();
c.duplicate();