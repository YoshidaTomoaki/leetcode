/**
 * FizzBuzz
 * @param n 1以上の整数、負の数 or 0はエラー
 */

type FizzBuzz = 'Fizz' | 'Buzz' | 'FizzBuzz';
export function fizzBuzz(n: number): Array<FizzBuzz | number> {
  if (!Number.isInteger(n)) throw new Error('must be integer');
  if (n <= 0) throw new Error('must be positive number greater than 0');

  const arr = [...Array(n)].map((_, i) => i + 1);

  return arr.map((n) => {
    if (n % (3 * 5) === 0) return 'FizzBuzz';
    if (n % 3 === 0) return 'Fizz';
    if (n % 5 === 0) return 'Buzz';

    return n;
  });
}
