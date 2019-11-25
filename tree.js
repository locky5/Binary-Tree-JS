class Node {
  constructor(left, right, data) {
    this.left = left
    this.right = right
    this.data = data
  }
}

class Tree {
  constructor(root, size) {
    this.root = null
    this.size = 0
  }

  createRoot(data) {
    this.root = new Node(null, null, data)
  }

  addLeftNode(node, data) {
    node.left = new Node(null, null, data)
  }

  addRightNode(node, data) {
    node.right = new Node(null, null, data)
  }

  printRoot() {
    console.log(this.root.data)
    console.log(this.root.left.data)
    console.log(this.root.right.data)
  }
}

let tree = new Tree()
tree.createRoot(200)
tree.addLeftNode(tree.root, 500)
tree.addRightNode(tree.root, 700)

tree.printRoot()
