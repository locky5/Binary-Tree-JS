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

  maxDepth() {
    if (this.root === null) {
      console.log(0)
    }

    let max = function(node, sum) {
      if (node === null) { //bottom of tree
        return sum
      }

      return Math.max(max(node.left, sum + 1), max(node.right, sum + 1)) //every time you recursively go through the left or right subtree, add one to the final sum
    }
    console.log(max(this.root, 0))
  }

  printRoot() {
    console.log(this.root.data)
  }

  preOrder() {
    preOrderHelper(this.root)
  }

  inOrder() {
    inOrderHelper(this.root)
  }

  postOrder() {
    postOrderHelper(this.root)
  }
}

//**CONSOLE.LOG IS WHERE YOU VISIT THE ROOT**
//Runtime for all transversals is O(n)

//print first root node --> preOrder(left node of first root node) by printing root node and then left node --> preOrder(right node)
//used to encounter all roots before leaves
function preOrderHelper(root) {
   if (root !== null) {
      console.log(root.data) //visit the root first
      preOrderHelper(root.left) //traverse the left subtree starting with the left node
      preOrderHelper(root.right) //traverse the right subtree starting with the right node
   }
}

//print left (most) node --> print root node --> inOrder(right node) --> once done with left subtree print first root node --> inOrder(right subtree)
//used to make the tree a specific sequence
function inOrderHelper(root) {
   if (root !== null) {
      inOrderHelper(root.left) //traverse the left subtree starting with the left node
      console.log(root.data) //visit the root
      inOrderHelper(root.right) //traverse the right subtree starting with the left node
   }
}

//print left (most) node --> go back to root and transverse to right node --> postOrder(right node) --> once done with right subtree postOrder(right subtree) --> print first root data
//used to encounter all leaves before roots
function postOrderHelper(root) {
   if (root !== null) {
      postOrderHelper(root.left) //traverse the left subtree starting with the left node first
      postOrderHelper(root.right) //traverse the right subtree starting with the left node
      console.log(root.data) //visit the root
   }
}

let tree = new Tree()
tree.createRoot(200)
tree.addLeftNode(tree.root, 500)
tree.addRightNode(tree.root, 700)
tree.addLeftNode(tree.root.left, 600)
tree.addRightNode(tree.root.right, 800)
tree.addLeftNode(tree.root.left.left, 1000)
tree.addRightNode(tree.root.left, 950)
tree.addLeftNode(tree.root.right, 720)
tree.addRightNode(tree.root.right.right, 440)
tree.addLeftNode(tree.root.left.left.left, 560)
tree.addRightNode(tree.root.right.right.right, 810)

// tree.printRoot()

tree.postOrder(tree.root)
console.log('/////')
tree.inOrder(tree.root)
console.log('/////')
tree.maxDepth()
