function HtmlElement() {
    this.click = function() {
        console.log('Clicked');
    };
}

HtmlElement.prototype.focus = function() {
    console.log('Focused');
};

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
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const s = new HtmlSelectElement();
