// 4 pillars of OOP
// 1) Encapsulation
// 2) Inheritance
// 3) Abstraction
// 4) Polymorphism

const circle = {
	radius: 1,
	location: {
		x: 1,
		y: 1,
	},
	drwa() {
		console.log(`Drawing`);
	}
};

circle.drwa();

// 2 ways we can create function objects [fn is an obj]

// Factory Function
function createCircle(radius) {
	return {
		radius,
		draw() {
			return `Draw....`;
		},
	}
}

const create_cirecle = createCircle(1);
console.log(create_cirecle.draw());

// Constructor Function
function Circle(radius) {
	// property
	this.radius = radius;

	// method
	this.draw = function() {
		return 'draw';
	};
}

const circle2 = new Circle(1); // without `new` `this` will point to window
console.log(circle2.draw());