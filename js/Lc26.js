/**
 * Leetcode 26
 * https://leetcode-cn.com/problems/unique-paths/
 */
const uniquePaths = function(m, n) {
  const f = new Array(m).fill(0).map(() => new Array(n));
  for (let i = 0; i < m; i++) {
    f[i][0] = 1;
  }
  for (let i = 0; i < n; i++) {
    f[0][i] = 0;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      f[i][j] = f[i-1][j] + f[i][j-1];
    }
  }
  return f[m-1][n-1];
}