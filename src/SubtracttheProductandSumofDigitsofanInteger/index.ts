export function subtractProductAndSum(n: number): number {
  const nums = n
    .toString()
    .split('')
    .map((v) => parseInt(v));

  return (
    nums.reduce((acc, cur) => acc * cur) - nums.reduce((acc, cur) => acc + cur)
  );
}
