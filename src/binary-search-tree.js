const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if (this.rootNode === null) {
      this.rootNode = new Node(data);
      return;
    }

    let current = this.rootNode;

    while (current) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = new Node(data);
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = new Node(data);
          return;
        }
        current = current.right;
      }
    }
  }

  has(data) {
    let current = this.rootNode;

    while (current) {
      if (data === current.data) {
        return true;
      }
      current = data < current.data ? current.left : current.right;
    }

    return false;
  }

  find(data) {
    let current = this.rootNode;

    while (current) {
      if (data === current.data) {
        return current;
      }
      current = data < current.data ? current.left : current.right;
    }

    return null;
  }

  remove(data) {
    let parent = null;
    let current = this.rootNode;

    while (current) {
      if (data === current.data) {
        if (current.left === null && current.right === null) {
          if (parent.left === current) {
            parent.left = null;
          } else {
            parent.right = null;
          }
        } else if (current.left === null || current.right === null) {
          const child = current.right === null ? current.left : current.right;
          if (parent.left === current) {
            parent.left = child;
          } else {
            parent.right = child;
          }
        } else {
          let minParent = current;
          let minNode = current.right;

          while (minNode.left) {
            minParent = minNode;
            minNode = minNode.left;
          }

          current.data = minNode.data;

          if (minParent.left === minNode) {
            minParent.left = minNode.right;
          } else {
            minParent.right = minNode.right;
          }
        }

        return;
      }

      parent = current;
      current = data < current.data ? current.left : current.right;
    }
  }

  min() {
    if (this.rootNode === null) {
      return null;
    }

    let minValue = this.rootNode;

    while (minValue.left) {
      minValue = minValue.left;
    }

    return minValue.data;
  }

  max() {
    if (this.rootNode === null) {
      return null;
    }

    let maxValue = this.rootNode;

    while (maxValue.right) {
      maxValue = maxValue.right;
    }

    return maxValue.data;
  }
}

module.exports = {
  BinarySearchTree,
};
