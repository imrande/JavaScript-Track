const _items = new WeakMap();

class Stack {
    constructor() {
        _items.set(this, []);
    }

    push_(value) {
        _items.get(this).push(value);
    }

    pop_() {
        const list = _items.get(this);

        if (list === []) {
            throw new Error('Stack is empty');
        }
        return list.pop();
    }

    peek() {
        const list = _items.get(this);

        if (list === []) {
            throw new Error('Stack is empty');
        }
        return list[list.length - 1];
    }

    get count() {
        return _items.get(this).length;
    }
}

const stack = new Stack();
stack.push_('a');
stack.push_('b');
stack.push_('c');

console.log(stack.count); // 3
console.log(stack.pop_()); // 'c'
console.log(stack.peek()); // 'b'
console.log(stack.count); // 2