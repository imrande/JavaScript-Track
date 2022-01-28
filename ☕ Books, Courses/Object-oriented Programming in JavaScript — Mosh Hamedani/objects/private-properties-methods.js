/*

function Circle(radius) {
	this.radius = radius;
	this.defaultLocation = { x: 0, y: 0 };
	this.computeOptimalLocation = function() {};

	this.draw = function() {
		this.computeOptimalLocation();
		console.log('draw');
	};
}

const circle = new Circle(10);
circle.draw()

*/

// set private methods & properties
function Circle(radius) {
	// we cant access `defaultLocation` outside of `Circle`
	let defaultLocation = { x: 0, y: 0 };
	let computeOptimalLocation = function() {};

	this.radius = radius;
	this.draw = function() {
		computeOptimalLocation();
		console.log('draw');
	};

	// setter & getter
	Object.defineProperty(this, 'default', {
		get: function() {
			return defaultLocation;
		},
		set: function(value) {
			defaultLocation = value;
		}
	});
}

const circle = new Circle(10);
console.log(circle.default);
circle.draw()