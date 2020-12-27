/**
 * leetcode problem 13.Roman to Integer
 * https://leetcode.com/problems/roman-to-integer/
 *
 * ts-nodeで実行
 * ex: npm run ts-node RomanToInteger.ts III
 * result [1,2]
 *
 * [todo]
 * - jestとコマンドライン実行時で環境変数か何か分ける
 *
 */

// コマンドライン 実行時
// const s: string = process.argv[2];

export function romanToInt(s: string): number {
  const hashTable = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  } as const;

  return s
    .split('')
    .map((cur, i) => {
      return hashTable[cur] > hashTable[s[i - 1]]
        ? hashTable[cur] - hashTable[s[i - 1]] * 2
        : hashTable[cur];
    })
    .reduce((acc, cur) => acc + cur);
}

// romanToInt(s);
