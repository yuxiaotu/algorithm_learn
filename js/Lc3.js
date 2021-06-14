const lengthOfLongestSubstring = function(str) {
  let start = 0;
  let res = 0;
  const map = new Map()
  for (let end = 0; end < str.length; end++) {
    if (map.has(str[end]) && map.get(str[end]) >= start) {
      start = map.get(str[end]) + 1;
    }
    res = Math.max(res, end - start + 1);
    map.set(s[end], end);
  }
  return res;
}