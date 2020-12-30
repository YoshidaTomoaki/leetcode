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

function runningSum2(nums: number[]): number[] {
  return nums.reduce((acc, cur, i) => {
    acc[i] = (acc[i - 1] ? acc[i - 1] : 0) + cur;
    return acc;
  }, []);
}

console.log(runningSum2([1, 2, 3, 4]));
