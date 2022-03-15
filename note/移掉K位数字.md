# [移掉K位数字](https://leetcode-cn.com/problems/remove-k-digits/)

- 要使得剩下的数字最小，需要保证靠前的数字尽可能小。
- 定义一个栈 `stk` 来存储数字。
- 当栈顶元素大于当前元素时，删除栈顶元素
- 当栈顶元素小于等于当前元素时，把当前元素放入栈中。
- 如果删除的数字小于 k ，那么还需要从尾部删除数字。
- 如果最终的数字序列存在前导零，我们要删去前导零。
- 如果最终数字序列为空，我们应该返回 0。

# 1. JavaScript

```js
var removeKdigits = function(num, K) {
  const stk = [];
  for (let digit of num) {
    while (stk.length > 0 && stk[stk.length-1] > digit && k) {
      stk.pop();
      k -= 1;
    }
    stk.push(digit);
  }
  for (; k > 0; --k) stk.pop();
  let ans = "";
  let isLeadingZero = true;
  for (let digit of stk) {
    if (isLeadingZero && digit == "0") contiue;
    isLeadingZero = false;
    ans += digit;
  }
  return ans === "" ? "0" : ans;
}
```