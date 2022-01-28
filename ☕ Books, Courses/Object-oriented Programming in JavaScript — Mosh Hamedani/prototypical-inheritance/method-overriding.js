const extends_ = function(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape() {}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
};

// Constructor
function Circle() {}

extends_(Circle, Shape);

// overriding duplicate method
Circle.prototype.duplicate = function() {
    // call parent duplicate as well
    Shape.prototype.duplicate.call(this);
    console.log('duplicate circle');
}

const c = new Circle();
c.duplicate(); // duplicate | duplicate circle