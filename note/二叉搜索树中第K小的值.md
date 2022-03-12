# [二叉搜索树中第K小的值](https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/)

- 使用「中序遍历」，第 `k` 个访问到的结点就是第 `k` 小的值。

# 1. JavaScript

```js
var kthSmallest = function(root, k) {
  let stack = [];
  while (root != null || stack.length) {
    while (root != null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    --k;
    if (k == 0) {
      break;
    }
    root = root.right;
  } 
  return root.val;
}
```

# 2. Java

```java
class Solution {
  public int kthSmallest(TreeNode root, int k) {
    Deque<TreeNode> stack = new ArrayDeque<TreeNode>();
    while (root != null || !stack.isEmpty()) {
      root = stack.pop();
      --k;
      if (k == 0) {
        break;
      }
      root = root.right;
    }
    return root;
  }
}
```