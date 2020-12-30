/**
 * 1672. Richest Customer Wealth
 * TODO: きれいに書く
 * TODO: テスト書く
 */

function maximumWealth(accounts: number[][]): number {
  return Math.max(...accounts.map((vs) => vs.reduce((acc, cur) => acc + cur)));
}

console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);
