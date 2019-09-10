class LoopQueue {
    constructor(length) {
        this.size = length + 1;
        this.head = 0;
        this.rear = 0;
        this.data = new Array(length + 1);
    }

    enqueue(item) {
        if (this.isFull()) {
            console.log('满了')
            return 0; // 满了
        } else {
            this.data[this.rear] = item;
            this.rear = (this.rear + 1) % this.size;
            return 1; // 加入成功
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log('没有拉！')
        } else {
            this.data[this.head] = null;
            this.head = (this.head + 1) % this.size;
        }
    }

    isFull() {
        if ((this.rear + 1) % this.size === this.head) {
            return true;
        }
    }

    isEmpty(){
        if (this.head === this.rear) {
            return true;
        }
    }

    print() {
        console.log(JSON.stringify(this.data))
    }
}

var queue = new LoopQueue(100000);

console.time('loop')
for(var i = 0; i < 100000; i++) {
    queue.enqueue(i);
}
for(var i = 0; i < 100000; i++) {
    queue.dequeue(i);
}
console.timeEnd('loop')