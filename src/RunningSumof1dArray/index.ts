/**
 * 1480. Running Sum of 1d Array
 * @param nums
 */

export function runningSum(nums: number[]): number[] {
  let acc;
  acc = 0;
  return nums.map((n) => {
    acc += n;
    return acc;
  });
}
