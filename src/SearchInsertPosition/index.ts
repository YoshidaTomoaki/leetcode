/**
 * 35. Search Insert Position
 *
 * Given a sorted array of distinct integers and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 *
 * @param nums number[]
 * @param target target number
 */
export function searchInsert(nums: number[], target: number): number {
  let result;

  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === target) {
      result = i;
      break;
    }

    if (nums[i] > target) {
      result = i;
      break;
    }

    if (i === nums.length) {
      result = i;
      break;
    }
  }

  return result;
}
