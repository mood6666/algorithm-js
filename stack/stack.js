class Stack {
    items = [];

    push(item) {
        this.items.push(item);
    }

    pop() {
        this.items.pop()
    }

    print() {
        console.log(JSON.stringify(this.items))
    }
}

const stack = new Stack();

stack.push('1111');
stack.push('2222');
stack.push('333');
stack.pop();
stack.pop();

stack.print();