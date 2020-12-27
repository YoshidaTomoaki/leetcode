//Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * Merge two sorted linked lists and return it as a new sorted list.
 *
 *   Time Complexity: O(m + n)
 *   Space Complexity: O(m + n)
 *
 *   Input: 1->2->4, 1->3->4
 *   Output: 1->1->2->3->4->4
 */
function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 === null) {
    return l2;
  } else if (l2 === null) {
    return l1;
  } else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}

const l1 = new ListNode(1, new ListNode(2, new ListNode(4, null)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));

console.log(mergeTwoLists(l1, l2));
