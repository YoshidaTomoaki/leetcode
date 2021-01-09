function createTargetArray(nums: number[], index: number[]): number[] {
  const results = [];
  nums.forEach((v, i) => results.splice(index[i], 0, nums[i]));
  return results;
}

// npm run ts-node /Users/tomoaki/develop/leetcode/src/CounttheNumberofConsistentStrings/index.ts [0,1,2,3,4] [0,1,2,2,1]
const num = process.argv[2]
  //.substring(1, process.argv[2].length - 1)
  .slice(1, -1)
  .split(',')
  .map((v) => parseInt(v));
const index = process.argv[3]
  //.substring(1, process.argv[3].length - 1)
  .slice(1, -1)
  .split(',')
  .map((v) => parseInt(v));
console.log(createTargetArray(num, index));
