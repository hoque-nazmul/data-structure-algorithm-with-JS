// Queue is FIFO (First In First Out) data structure which principle is the first element added to the Queue will be the first element removed from the Queue. Actually, we can do two things using Queue as well. Firstly, we can add data at the first to the Queue which is known as enqueue, and secondly, we can remove first added data from the Queue which is known as dequeue.

// Consider, some people are waiting for an airplane ticket in a line. In that case, the first person in line is the first person out. The Queue absolutely looks like that.

// Building a Queue with an array
const queue = []

queue.unshift(32);
console.log(queue); // expected output: [ 32 ]

queue.unshift(22);
console.log(queue); // expected output: [ 22, 32 ]

queue.pop()
console.log(queue);  // expected output: [ 22 ]

// N.B. We added 32 as the first element but 32 is first removed element from the queue.

// Building a Queue with OOP
class Queue {
    constructor () {
        this.queue = [];
    }
    enQueue (value) {
        this.queue.unshift(value);
    }
    deQueue () {
        return this.queue.pop();
    }
    // If you want, you can skip peek(). It's used for showing the last element of the Queue
    peek () {
        return this.queue[this.queue.length - 1]
    }
}
const myQueue = new Queue();
myQueue.enQueue(11);
console.log(myQueue); // expected output: Queue { queue: [ 11 ] }

myQueue.enQueue(22);
console.log(myQueue); // expected output: Queue { queue: [ 22, 11 ] }

myQueue.deQueue();
console.log(myQueue); // expected output: Queue { queue: [ 22 ] }

// First added 11 element is First out.


