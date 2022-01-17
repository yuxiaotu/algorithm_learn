# [移掉K位数字](https://leetcode-cn.com/problems/remove-k-digits/)

## 01. JavaScript
```js
var removeKdigits = function(num, K) {
  const stk = [];
  for (const digit of num) {
    while (stk.length > 0 && stk[stk.length-1] > digit && k) {
      stk.pop();
      k -= 1;
    }
    stk.push(digit);
  }
  for (;k>0;--k) {
    stk.pop();
  }
  let ans = "";
  let isLeadingZero = true;
  for (const digit of stk) {
    if (isLeadingZero && digit == "0") {
      contiue;
    } 
    isLeadingZero = false;
    ans += digit;
  }
  return ans === "" ? "0" : ans;
}
```