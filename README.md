Once we copy a variable, the new variable is distinct from old one.

```js
let variable = 'abc';
let variableCopy = variable;
console.log(variableCopy); // -> abc
```

- `undefined` is a special variable type used to indicate that something is missing
	- the JavaScript engine will make variables that have no value `undefined`

```js
let falseFlag = false;

if(falseFlag) console.log('This will not print.');
else console.log('This will print!');
```

How Js run codes without `{}`. Technically if statement run only next line/item it sees. when we declare if with `{}` this block, the entire block consider as item, when without `{}` block, it runs only next line.

`===` doesn't allow coercion | where `==` allow coercion, either left or right or both

The double-equal sign is symmetric. That is, `if a == b` is `true`, then `b == a` is also `true`, for all values `a` and `b`.

if we use a function with return statement without returning any value it will return `undefined`

```js
// returning multiple values from function only return last value
function add(num1, num2) {
    let newNumber = num1 + num2;
    return 10,12,15;
}

let twenty = add(5, 15);
console.log(twenty); // -> 15 //=> why?
```

if `key` in `object` is a variable then we must have to use `[]` this notation. If key is `string` we can use both `.` || `[]`
