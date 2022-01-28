function Shape(color) {
    this.color = color;
}

Shape.prototype = {
    duplicate() {
        console.log('Hello');
    }
};

let extends_ = function(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

// constructor 
function Circle(radius, color) {
    Shape.call(this);
    this.radius = radius;
    this.color = color;
}

extends_(Circle, Shape);

Circle.prototype.draw = function() {
    console.log('draw');
};

// constructor 
function Square(size, color) {
    Shape.call(this, color);
    this.size = size;
}

extends_(Square, Shape);

const sq = new Square(20, 'yellow');
sq.duplicate();
const c = new Circle(10, 'red');
console.log(c);
c.draw();
c.duplicate();