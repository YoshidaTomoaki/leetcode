/**
 * 1313. Decompress Run-Length Encoded List
 * @param nums number[]
 */
/*
export function decompressRLElist(nums: number[]): number[] {
  const r = [];

  nums.forEach(
    (v, i) => i % 2 === 1 && [...Array(nums[i - 1])].forEach(() => r.push(v))
  );

  return r;
}
*/

export function decompressRLElist(nums: number[]): number[] {
  return nums.reduce((acc, cur, i) => {
    return i % 2 === 1
      ? acc.length > 0
        ? [...acc, ...[...Array(nums[i - 1])].map(() => cur)]
        : [...Array(nums[i - 1])].map(() => cur)
      : acc;
  }, []);
}
