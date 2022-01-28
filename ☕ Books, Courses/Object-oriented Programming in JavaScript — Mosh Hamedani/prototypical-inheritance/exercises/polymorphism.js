function HtmlElement() {
    this.click = function() {
        console.log('Clicked');
    };
}

HtmlElement.prototype.focus = function() {
    console.log('Focused');
};

function extends_(Child, Parent) {
    Child.prototype = new Parent();
    Child.prototype.constructor = Child;
}

function HtmlSelectElement(items = []) {
    this.items = items;

    this.addItem = function(item) {
        this.items.push(item);
    };

    this.removeItem = function(value) {
        if ( this.items === [] ) {
            throw new Error('Array is empty');
        }
        this.items = this.items.filter(item => item != value );
    };

    this.render = function() {
        return `
        <select>${this.items.map(item => `
            <option>${item}</option>`).join('')}
        </select>
        `
    }
            
}

extends_(HtmlSelectElement, HtmlElement);

function HtmlImageElement(src = 'https://') {
    this.src = src;
    this.render = function() {
        return `<img src = '${this.src}' />`;
    }
}

extends_(HtmlImageElement, HtmlElement);

const elements = [
    new HtmlSelectElement([1, 2, 3]),
    new HtmlImageElement('http://x.com')
  ];
  
  for (let element of elements) 
    console.log(element.render());