class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // iterative
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let compareNode = this.root;

    while (true) {
      if (compareNode.val > value) {
        if (!compareNode.left) {
          compareNode.left = newNode;
          return this;
        }

        compareNode = compareNode.left;
      } else if (compareNode.val < value) {
        if (!compareNode.right) {
          compareNode.right = newNode;
          return this;
        }

        compareNode = compareNode.right;
      } else {
        return null;
      }
    }
  }

  // recursive
  insert2(value, node = this.root) {
    if (!this.root) {
      this.root = new Node(value);
      return this;
    }

    if (value < node.val) {
      if (!node.left) {
        node.left = new Node(value);
        return this;
      }

      this.insert2(value, node.left);
    } else if (value > node.val) {
      if (!node.right) {
        node.right = new Node(value);
        return this;
      }

      this.insert2(value, node.right);
    } else {
      return null;
    }
  }
}

// const tree = new BinarySearchTree();
// console.log(tree.insert(10));
// console.log(tree.insert(5));
// console.log(tree.insert(13));
// console.log(tree.insert(2));
// console.log(tree.insert(7));
// console.log(tree.insert(11));
// console.log(tree.insert(16));

const tree2 = new BinarySearchTree();
console.log(tree2.insert2(10));
console.log(tree2.insert2(5));
console.log(tree2.insert2(13));
console.log(tree2.insert2(7));
console.log(tree2.insert2(11));
console.log(tree2.insert2(16));
console.log(tree2.insert2(2));
