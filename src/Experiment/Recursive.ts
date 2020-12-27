/**
 * 再帰関数の練習
 */

/**
 * 1 ~ n までの総和
 * ex: sum(3) => 3 + sum(3 - 1) => 3 + 2 + sum(2 -1) => 3 + 2 + 1 + sum(1 - 1) => 3 + 2 + 1 + 0 => 6
 * @param n 1以上の整数
 */
export function sum(n: number): number {
  if (n <= 0) return 0;

  return n + sum(n - 1);
}

sum(10);

/**
 * 1 ~ n までの階乗
 * ex: multi(3) => 3 * multi(2) => 3 * 2 * multi(2 -1) => 3 * 2 * 1 * multi(1 - 1) => 3 * 2 * 1 * 1 => 6
 * @param n 1以上の整数
 */
export function multi(n: number): number {
  if (n <= 1) {
    return 1;
  }

  return n * multi(n - 1);
}

multi(10);
