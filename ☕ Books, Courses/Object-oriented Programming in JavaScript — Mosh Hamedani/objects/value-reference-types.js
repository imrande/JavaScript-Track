// Value types are copied by their value, reference types are copied by their reference. 
// Value types in JavaScript are: String, Number, Boolean, Symbol, undefined and null
// Reference types are: Object, Function and Array 

// value type
let number = 10;
function increase(number) { 
	// 10 is copied and set to `number` var which is function scope
	number++; // 11
}

increase(number);
console.log(number); // 10

// reference type
function Increase(x) {
	x.value++;
}

let x = { value: 10 };
Increase(x);
console.log(x); // { value: 11 }