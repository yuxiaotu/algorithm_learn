package java;

/**
 * Leetcode 11
 */
class Lc11 {
  public static int maxArea(int[] height) {
    int L = 0;
    int R = height.length - 1;
    int maxArea = 0;
    while(L < R) {
      h = Max(height[L], height[R]);
      maxArea = Max(maxArea, h * (R - L));
      L++;
      R--;
    }
    return maxArea;
  }
}