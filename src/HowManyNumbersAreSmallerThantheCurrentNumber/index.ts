export function smallerNumbersThanCurrent(nums: number[]): number[] {
  return nums.map((v, i) => {
    return nums.reduce((acc, cur, j) => {
      if (i === j) return acc;
      if (v > cur) return acc + 1;
      return acc;
    }, 0);
  });
}
