# [重复的DNA序列](https://leetcode-cn.com/problems/repeated-dna-sequences/)

- `s.slice(i, i+10)` 截取长度为 10 的子串。
- 定义 `set` 集合，用于保存截取的子串。
- 如果后面出现的子串在 `set` 中出现过，把结果放在 `res` 中。
- 最后通过 `[...new Set(res)]` 去掉重复的元素。 

# 1. JavaScript

```js
var findRepeatedDnaSequences = function(s) {
  const len = s.length;
  const set = new Set();
  const res = [];
  for (let i = 0; i + 9 < len; i++) {
    const str = s.slice(i, i+10);
    set.has(str) ? res.push(str) : set.add(str)
  }
  return [...new Set(res)];
}
```