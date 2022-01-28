const _radius = Symbol(); // Symbol() always generate unique value
const _draw = Symbol();

class Circle {
    constructor(radius) {
        // private property | we can't call it from outside
        this[_radius] = radius;
    }

    // private method
    [_draw]() {
        return `drawing`;
    }
    // instance method
    click() {
        console.log(`Clicking with ${this[_radius]}`);
    }
}

const c = new Circle(2);
c.click();