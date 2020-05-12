// Binary Tree is a tree data structure in which each node has at most two children which are known as the left child and right child. Binary Seach Tree (BST) is a special binary tree which has some specific requirements. Such as:

// The Requirements of Binary Search Tree (BST)
// 1. Every Parent node has at most two children
// 2. Every node to the left of a parent node is always less than the parent.
// 3. Every node to the right of a parent node is always greater than the parent.

/*** Binary Search Trees ***/
class Node {
    constructor (data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        if (data < this.data && this.left) {
            this.left.insert(data);
        } else if (data < this.data) {
            this.left = new Node(data);
        } else if (data > this.data && this.right) {
            this.right.insert(data);
        } else if (data > this.data) {
            this.right = new Node(data);
        }
    }

    contains(data) {
        if (this.data === data) {
            return this;
        }
        
        if (this.data < data && this.right) {
            return this.right.contains(data);
        } else if (this.data > data && this.left) {
            return this.left.contains(data);
        }

        return null;
    }
}

// Let's play with BST
const myBST = new Node(30);
console.log(myBST);
// expected output: Node { data: 30, left: null, right: null }

myBST.insert(20);
myBST.insert(40);
console.log(myBST);

/*
    expected output: 
    Node {
        data: 30,
        left: Node { data: 20, left: null, right: null },
        right: Node { data: 40, left: null, right: null }
    }
*/

myBST.insert(15);
myBST.insert(25);
myBST.insert(35);
myBST.insert(45);
console.log(myBST);
/*
    expecpted output:
    Node {
        data: 30,
        left: Node {
            data: 20,
            left: Node { data: 15, left: null, right: null },
            right: Node { data: 25, left: null, right: null }
        },
        right: Node {
            data: 40,
            left: Node { data: 35, left: null, right: null },
            right: Node { data: 45, left: null, right: null }
        }
    }
*/

console.log(myBST.contains(40));
/*
    expected output: 
    Node {
        data: 40,
        left: Node { data: 35, left: null, right: null },
        right: Node { data: 45, left: null, right: null }
    }
*/ 
