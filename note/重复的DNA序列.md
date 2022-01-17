# [重复的DNA序列](https://leetcode-cn.com/problems/repeated-dna-sequences/)

## 01. JavaScript
```js
var findRepeatedDnaSequences = function(s) {
  const len = s.length;
  const set = new Set();
  const res = [];
  for (let i = 0; i + 9 < length; i++) {
    const str = s.slice(i, i+10);
    if (set.has(str)) res.push(str);
  }
  return [...new Set(res)];
}
```