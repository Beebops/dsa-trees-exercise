/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0

    const queue = [this.root]
    // depth is at least 1 since a root exists
    let depth = 1

    while (queue.length > 0) {
      const level = queue.length

      for (let i = 0; i < level; i++) {
        const currentNode = queue.shift()

        if (currentNode.left === null && currentNode.right === null) {
          // the first leaf node found will be the minimum depth
          return depth
        }

        if (currentNode.left) {
          queue.push(currentNode.left)
        }

        if (currentNode.right) {
          queue.push(currentNode.right)
        }
      }
      // increment depth and move down to the next level
      depth++
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0

    const stack = [{ node: this.root, depth: 1 }]

    let maxDepth = 1

    while (stack.length > 0) {
      const { node, depth } = stack.pop()

      if (node.left) {
        stack.push({ node: node.left, depth: depth + 1 })
        maxDepth = Math.max(maxDepth, depth + 1)
      }

      if (node.right) {
        stack.push({ node: node.right, depth: depth + 1 })
        maxDepth = Math.max(maxDepth, depth + 1)
      }
    }
    return maxDepth
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (!this.root) return 0

    let result = 0
    const stack = [{ node: this.root, maxSum: 0 }]

    while (stack.length > 0) {
      const { node, maxSum } = stack.pop()

      result = Math.max(result, maxSum)

      if (node.left) {
        stack.push({ node: node.left, maxSum: Math.max(0, maxSum + node.val) })
      }

      if (node.right) {
        stack.push({ node: node.right, maxSum: Math.max(0, maxSum + node.val) })
      }
    }
    return result
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null

    const queue = [this.root]
    let nearestVal = null

    while (queue.length > 0) {
      let currentNode = queue.shift()
      let currentVal = currentNode.val
      let higherThan = currentVal > lowerBound
      let shouldReassignNearestVal = currentVal < nearestVal || nearest === null

      if (higherThan && shouldReassignNearestVal) {
        nearest = currentVal
      }

      if (currentNode.left) queue.push(currentNode.left)
      if (currentNode.right) queue.push(currentNode.right)
    }
    return nearest
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode }
