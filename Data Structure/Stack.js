// Stack is LIFO (Last In First Out) data structure which principle is the last element added to the Stack will be the first element removed from the Stack. Actually, we can do two things using Stack. Firstly, we can add data at the last to the Stack which is known as push, and secondly, we can remove last added data from the Stack which is known as pop.

// Array Implementation
const stack = [];

stack.push(42);
console.log(stack); // expected output: [ 42 ]

stack.push(22);
console.log(stack); // expected output: [ 42, 22 ]

stack.push(10);
console.log(stack); // expected output: [ 42, 22, 10 ]

//N.B. everytimes push added data at the last position to the stack array.

stack.pop();
console.log(stack); // expected output: [ 42, 22 ]

stack.pop();
console.log(stack); // expected output: [ 42 ]

console.log("Created Stack Data Structure");
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

const myStack = new Stack();
myStack.push(32);
console.log(myStack);

myStack.push(22);
console.log(myStack);


myStack.pop();
console.log(myStack);

/*
    expected output: 
    Stack {
        first: Node { value: 32, next: null },
        last: Node { value: 32, next: null },
        size: 1
    }
    Stack {
        first: Node { value: 22, next: Node { value: 32, next: null } },
        last: Node { value: 32, next: null },
        size: 2
    }
    Stack {
        first: Node { value: 32, next: null },
        last: Node { value: 32, next: null },
        size: 1
    }
*/
