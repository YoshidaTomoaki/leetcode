export function numIdenticalPairs(nums: number[]): number {
  const stack = [];

  nums.forEach((v, i) => {
    nums.forEach((v2, j) => {
      // 重複する組み合わせを対象から外す(i < j)
      if (i >= j) return;
      // nums[i] === nums[j] && i < j の場合stackに追加
      if (v === v2) return stack.push({ i: j });
      return;
    });
  });

  // スタックに追加した数を返す
  return stack.length;
}
