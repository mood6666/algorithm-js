class QueueElement{
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}


class PriorityQueue {
    items = [];

    enqueue(element, priority) {
        const priorityElement = new QueueElement(element, priority);
        let isAdd = false;

        if (this.items.length === 0) {
            this.items.push(priorityElement);
        } else {
            for(let i = 0; i < this.items.length; i ++ ) {
                const item = this.items[i];
                if (priority < item.priority) {
                    isAdd = true;
                    this.items.splice(i, 0, priorityElement);
                    break;
                }
            }

            if (!isAdd) {
                this.items.push(priorityElement);
            }
        }
    }

    dequeue() {
        return this.items.shift();
    }

    print() {
        console.log(JSON.stringify(this.items));
    }
}

var queue = new PriorityQueue();

// queue.enqueue('a', 1);
// queue.enqueue('b', 2);
// queue.enqueue('c', 2);
// queue.enqueue('d', 2);
// queue.enqueue('e', 1);
// queue.print();
// queue.dequeue();
// queue.print();
console.time('queue')
for(var i = 0; i < 100000; i++) {
    queue.enqueue(i, i);
}
for(var i = 0; i < 100000; i++) {
    queue.dequeue();
}
console.timeEnd('queue')



