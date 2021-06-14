![algorithm](https://s3-us-west-2.amazonaws.com/robogarden-new/Articles/upload/blogs/fb-how-to-learn-algorithms.jpg)

# 算法学习

我自己在学习算法的过程中将题目按照输入参数划分为了数组、链表、和矩阵这几类。这样可以有助于对解题思路进行划分和总结，帮助自己归纳出解题的一般套路。

## 1，双指针

> 双指针指的是在遍历过程中使用两个相同方向或者是相反方向的指针进行扫描，从而达到相应的目的。双指针充分使用了数组有序这一特征，从而可以简化一些运算。

### 对撞指针

常在数组中使用，两个指针一个指向头部一个指向尾部，然后同时向中间移动对数组进行遍历。适用于连续数组和字符串。

```java
// 伪代码
public void find (int[] list) {
    L = 0;
    R = list.length - 1;
    while (L <= R) {
        // 处理过程
        R--;
        L++;
    }
}
```



| 题目                                                         | java | javascript | python | 题解 |
| ------------------------------------------------------------ | ---- | ---------- | ------ | ---- |
| [翻转字符串](https://leetcode-cn.com/problems/reverse-string/) |      |            |        |      |



### 快慢指针

两个指针从同一侧开始遍历数组，将这两个指针定义为快指针，和慢指针，以不同的策略移动直到两个指针的值相等。

可以用来检测链表中是否含有环，寻找链表中的环。

| 题目                                                         | java | javascript | python | 题解 |
| ------------------------------------------------------------ | ---- | ---------- | ------ | ---- |
| [环形链表](https://leetcode-cn.com/problems/linked-list-cycle/) |      |            |        |      |
| [寻找中点](https://leetcode-cn.com/problems/middle-of-the-linked-list/submissions/) |      |            |        |      |
| [寻找链表中倒数第K个元素](https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/) |      |            |        |      |



## 2，动态规划

> 就是利用历史记录来避免重复计算，这些变量一般可以用一维数组或者是二维数组来保存。

动态规划的三个步骤：

- 定义数组元素的含义，用一个数组 dp[] 来保存历史数据，这时候就需要知道 dp[i] 代表的是什么意思。
- 找出数组元素之间的关系式，类似于归纳法，当要可以利用 dp[n-1] ，dp[n-2] ，... dp[1]，来推导dp[n]。所以要找出数组元素之间的关系式，例如，dp[n] = dp[n-1] + dp[n-2]。
- 找出初始值，如上面的式子中dp[1]，和 dp[2] 就是不能再分解的了，就必须直接获取 dp[2] 和 dp[1] 的值。



## 3，滑动窗口

> 在特定窗口大小的数组或者是字符串上执行要求的操作，该技术可以将一部分问题中的嵌套循环转变为一个单循环，可以减少时间复杂度。

:link: [滑动窗口的原理和实践](https://leetcode-cn.com/circle/article/YGr54o/)

**滑动：**说明窗口是移动的，也是移动是按照一定方向来的。s

**窗口：** 窗口大小并不是固定的，可以不断扩容直到满足一定的条件，可以不断缩小，直到找到一个满足条件的最小窗口，当然也可以是固定大小的。

### 思路

- 在字符串中使用双指针中的左右指针，初始化 left = right = 0，把索引闭区间 [left, right] 称为一个 " 窗口 "
- 我们先不断的增加 right 指针扩大窗口 [left, right] 直到窗口中的字符串符合要求
- 此时停止增加 right，而是不断增加 left 指针缩小窗口 [left, right]，直到窗口中的字符串不再符合要求。同时每次增加我们都要更新一轮结果
- 重复第2步和第3步，直到 right 到达字符串 s 的尽头。

```java
public void func() {
    String s, t;
    int left = 0;
    int right = 0;
    String res = s;
    
    while (right < s.size()) {
        window.add(s[right]);
        right++;
        while(window 符合条件) {
            res = minLen(res, window);
            window.remove(s[left]);
            left++;
        }
    }
    return res;
}
```



| 题目                                                         | java | javascript | python | 题解 |
| ------------------------------------------------------------ | ---- | ---------- | ------ | ---- |
| [尽可能使字符串相等](https://leetcode-cn.com/problems/get-equal-substrings-within-budget/) |      |            |        |      |









