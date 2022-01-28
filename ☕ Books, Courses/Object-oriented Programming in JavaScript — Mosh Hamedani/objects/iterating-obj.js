// add property in an existing object
function Circel(radius) {
	this.radius = radius;
	this.draw = function() {
		console.log('draw');
	};
}

const cirecle = new Circel(1);
cirecle.location = { x: 1, y: 1 };
console.log(cirecle);

// iterating
for(const key in cirecle) {
	console.log(`${key}: ${cirecle[key]}`)
}

console.log('radius' in cirecle); // true