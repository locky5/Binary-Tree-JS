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

  printRoot() {
    console.log(this.root.data)
  }
}

let tree = new Tree()
tree.createRoot(200)

tree.printRoot()
