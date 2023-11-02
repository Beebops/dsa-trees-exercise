/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val
    this.children = children
  }
}

class Tree {
  constructor(root = null) {
    this.root = root
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0

    let node = this.root
    const values = []
    const queue = []
    queue.push(node)

    while (queue.length) {
      node = queue.shift()
      values.push(node.val)
      if (node.children) {
        for (let child of node.children) {
          queue.push(child)
        }
      }
    }
    return values.reduce((acc, current) => acc + current, 0)
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0

    let node = this.root
    const queue = [node]
    let count = 0

    while (queue.length) {
      node = queue.shift()
      if (node.val % 2 === 0) {
        count++
      }
      if (node.children) {
        for (let child of node.children) {
          queue.push(child)
        }
      }
    }
    return count
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0

    let node = this.root
    let count = 0
    const queue = [node]

    while (queue.length) {
      node = queue.shift()
      if (node.val > lowerBound) count++
      if (node.children) {
        for (let child of node.children) {
          queue.push(child)
        }
      }
    }
    return count
  }
}

module.exports = { Tree, TreeNode }
