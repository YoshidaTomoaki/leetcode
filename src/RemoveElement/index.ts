/**
 * 27. Remove Element
 * - Given an array nums and a value val, remove all instances of that value in-place and return the new length.
 * @param nums number[]
 * @param val number
 */

export function removeElement(nums: number[], val: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (val == nums[i]) {
      nums.splice(i, 1);
      i -= 1;
    }
  }
  return nums.length;
}
