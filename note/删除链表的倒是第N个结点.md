# [删除链表的倒是第N个结点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)

- 定义 `fast` 和 `flow` 两个指针。
- 让 `fast` 指针先走 `n` 步。
- 然后再同时向前移动。
- 当 `fast` 指针指向最后一个结点时，`slow` 指针指向倒数第 n 个结点。

## 01. Javascript
```js
var removeNtheFromEnd = function(head, n) {
  let fast = head;
  let slow = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  if (!fast) {
    return head.next
  }

  while (fast.next != null) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return head;
}
```