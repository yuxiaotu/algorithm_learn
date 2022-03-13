# [x 的平方根](https://leetcode-cn.com/problems/sqrtx/)

- 设 `x`  平方根的整数部分是 `k` ，
- k 是满足  `k^2 < x` 的最大值。
- 利用「二分查找」，将下界设为 0，上界设为 x。

# 1. JavaScript

```js
var mySqrt = function(x) {
  int left = 0, right = x, ans = -1;
  while (left <= right) {
  	let mid = Math.floor((left+right)/2);
    if (mid ** 2 <= x) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return ans;
}
```

