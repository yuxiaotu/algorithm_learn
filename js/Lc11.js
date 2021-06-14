const maxArea = function(heights) {
  let L = 0;
  let R = heights.length;
  let maxArea = 0;
  while (L < R) {
    h = Math.max(heights[L], heights[R]);
    maxArea = Math.max(maxArea, h * (R - L));
    L++;
    R--;
  }
  return maxArea;
}