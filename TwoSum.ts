/**
 * leetcode problem 1.Two Sum
 * https://leetcode.com/problems/two-sum/
 *
 * ts-nodeで実行
 * ex: npm run ts-node TwoSum.ts 3,1,2 3
 * result [1,2]
 *
 * [todo]
 * - コードきれいに書く
 * - eslint+prettier 入れる
 * - jestでテスト書く
 */

const nums: number[] = process.argv[2]
  .split(',')
  .map((string) => parseInt(string));
const target: number = parseInt(process.argv[3]);

console.log(twoSum(nums, target));

function twoSum(nums: number[], target: number): number[] {
  const results = nums
    .map((num, i) => {
      return nums
        .map((_, j) => {
          // you may not use the same element twice.
          if (i >= j) return;

          if (num + nums[j] !== target) return;

          return [i, j];
        })
        .filter((v) => v);
    })
    .filter((v) => v.length !== 0);

  const r = [].concat(...results);
  const r2 = [].concat(...r);

  return r2;
}
