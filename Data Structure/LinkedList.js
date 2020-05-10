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


const myLinkedList = new LinkedList();

myLinkedList.insertFirst(22);
myLinkedList.insertFirst(11);

console.log(myLinkedList);


