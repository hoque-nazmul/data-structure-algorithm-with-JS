// Linked List is one of the most interesting & important Data Structure. It is the list of elements called nodes that are connected together or linked together in a line. There are two types of linked list. For Example:

// 1, Singly Linked List: Its node only points to the next Node.
// 2. Doubly Linked List: Its node not only points to the next Node but also points to the previous Node.

// Linked List consists of nodes, and each node has a value and a pointer to another node or null. Excepting the last Node, every node of Linked List points to the next node. The last node points to the null. It gives us a great privilege to do efficient insertion and removal of items without the need for reorganization. The beginning of the Linked List is known as Head and the end of the Linked List is known as Tail.

class Node {
    constructor (data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
    }
    insertFirst (value) {
        this.head = new Node(value, this.head);
    }
    size () {
        let counter = 0;
        let node = this.head;
        while (node) {
            counter++;
            // assigning node by next node again & again to reach last node
            node = node.next;
        }
        return counter;
    }
    getFirst () {
        return this.head;
    }
    getLast () {
        if (!this.head) {
            return null;
        }
        let node  = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            // assigning node by next node again & again to get last node
            node = node.next;
        }
    }
    clear () {
        this.head = null;
    }
    removeFirst () {
        if (!this.head) {
            return;
        }
        // first node will be the second node.
        this.head = this.head.next;
    }
    removeLast () {
        if (!this.head) {
            return;
        }
        // only one node will be assigned with null to remove
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;
        // loop for getting before last & last node.
        while (node.next) {
            previous = node;
            node = node.next;
        }
        // assigning last node with null.
        previous.next = null;
    }
    insertLast (value) {
        const last = this.getLast();
        if (last) {
            last.next = new Node(value);
        } else {
            this.head = new Node(value);
        }
    }
    getAt (index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (index === counter) {
                return node;
            }
            counter++;
            node = node.next;
        }
        // if hadn't any node & unable to find node return null;
        return null;
    }
    removeAt (index) {
        if (!this.head) {
            return;
        }
        // easily can remove the first node if index is0
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        // get the previous node by reusing getAt()
        const previous = this.getAt(index - 1);
        // if previous is out bounce & previous.next(current) not exist return.
        if (!previous || !previous.next) {
            return;
        }
        // assign previous.next(current node) by previous.next.next(next node)
        previous.next = previous.next.next;
    }
    insertAt (index, value) {
        if (!this.head) {
            this.head = new Node(value);
            return;
        }
        // insert first node with provided value & next reference
        if (index === 0) {
            this.head = new Node(value, this.head);
            return;
        }
        // if index is out of bounce, add node to the end of the list.
        // if index is out of bounce, assign previous with last node.
        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(value, previous.next);
        previous.next = node;
    }
}
// play with Linked List
const myLinkedList = new LinkedList();

myLinkedList.insertFirst(22);
myLinkedList.insertFirst(11);

console.log(myLinkedList);
/*  expected output:
    LinkedList {
        head: Node { data: 11, next: Node { data: 22, next: null } }
    }
*/
console.log(myLinkedList.size()); // expected output: 2

console.log(myLinkedList.removeAt(1));
console.log(myLinkedList);
/*  expected output:
    LinkedList { head: Node { data: 11, next: null } }
*/

console.log(myLinkedList.insertAt(1, 50));
console.log(myLinkedList);
/*  expected output:
    LinkedList {
        head: Node { data: 11, next: Node { data: 50, next: null } }
    }
*/


