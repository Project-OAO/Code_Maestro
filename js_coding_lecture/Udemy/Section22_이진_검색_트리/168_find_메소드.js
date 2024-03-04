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

  find(value) {
    if (!this.root) return null;

    let node = this.root;
    while (true) {
      if (value < node.val) {
        if (!node.left) {
          return null;
        }

        if (node.left.val === value) {
          return node.left;
        }

        node = node.left;
      } else if (value > node.val) {
        if (!node.right) {
          return null;
        }

        if (node.right.val === value) {
          return node.right;
        }

        node = node.right;
      } else {
        return node;
      }
    }
  }
}
