// Stack is LIFO (Last In First Out) data structure which principle is the last element added to the Stack will be the first element removed from the Stack. Actually, we can do two things using Stack. Firstly, we can add data at the last to the Stack which is known as push, and secondly, we can remove last added data from the Stack which is known as pop.

// Building a Stack with an Array
const stack = [];

stack.push(42);
console.log(stack); // expected output: [ 42 ]

stack.push(22);
console.log(stack); // expected output: [ 42, 22 ]

stack.pop();
console.log(stack); // expected output: [ 42 ]

//N.B. Last Added 22 element is First Out.

// Building a Stack with OOP
class Stack {
    constructor () {
        this.stack = [];
    }
    push (value) {
        this.stack.push(value);
    }
    pop () {
        return this.stack.pop();
    }
    // peek() is used for showing the last element of the Queue.
    // If you want, you can skip it.
    peek () {
        return this.stack[ this.stack.length - 1 ]
    } 
}
const myStack = new Stack();

myStack.push(55);
console.log(myStack); // expected output: Stack { stack: [ 55 ] }

myStack.push(66);
console.log(myStack); //expected output: Stack Stack { stack: [ 55, 66 ] }

myStack.pop();
console.log(myStack); // expected output: Stack { stack: [ 55 ] }

//N.B. Last Added 66 element is First Out.





