//Definition for singly-linked list.
// https://codybonney.com/leetcode-merge-two-sorted-linked-lists-using-typescript/

export function mergeTwoLists(
  l1: any[] | null,
  l2: any[] | null
): any[] | null {
  return [...l1, ...l2].sort((a, b) => a - b);
}
