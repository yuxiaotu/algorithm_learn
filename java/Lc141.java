package java;

class Lc14 {
  public static boolean hasCycle(ListNode head) {
    ListNode fast;
    ListNode slow;
    fast = slow = head;
    while(fast != null && fast.next != null) {
      fast = fast.next.next;
      if (fast == slow) {
        return true;
      }
    }
    return false;
  }
}