class Node {
    constructor (data = null) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        const node = new Node(data);
        this.children.push(node);
    }
    
    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !== data;
        });
    }
}

class Tree {
    constructor () {
        this.root = null;
    }

    traverseBF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();

            arr.push(...node.children);
            fn(node);
        }
    }

    traverseDF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node  = arr.shift();

            arr.unshift(...node.children);
            fn(node);
        }
    }
}

const myNode = new Node(32);
console.log(myNode);
// expected output: Node { data: 32, children: [] }

myNode.add(11);
myNode.add(22);
myNode.add(33);
console.log(myNode);
/*
Output:
Node {
  data: 32,
  children: [
    Node { data: 11, children: [] },
    Node { data: 22, children: [] },
    Node { data: 33, children: [] }
  ]
}
*/

const myTree = new Tree();
myTree.root = myNode;
myTree.traverseBF((node) => console.log(node.data));
// expected output: 32 11 22 33

myTree.traverseDF((node) => console.log(node.data));
// expected output: 32 11 22 33

