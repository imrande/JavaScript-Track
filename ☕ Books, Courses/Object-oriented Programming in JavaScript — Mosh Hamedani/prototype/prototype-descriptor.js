// https://javascript.info/property-descriptors
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor

let person = {
	name: 'Mosh',
};

Object.defineProperty(person, 'name', {
	writable: false, // changeable # default is true
	configurable: false, // delete 
	enumerable: false, // iterating
})

person.name = 'John';
delete person.name;
console.log(Object.keys(person))
console.log(person); // still Mosh

let objectBase = Object.getPrototypeOf(person); // return object prototype
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString'); // {...}
console.log(descriptor);

// Object.keys() return only instance members.
// for..in loop return both(prototype + instance)