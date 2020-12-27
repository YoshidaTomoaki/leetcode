type FizzBuzz = 'Fizz' | 'Buzz' | 'FizzBuzz';
export function fizzBuzz(n: number): Array<FizzBuzz | number> {
  const arr = [...Array(n)].map((_, i) => i + 1);

  return arr.map((n) => {
    if (n % (3 * 5) === 0) return 'FizzBuzz';
    if (n % 3 === 0) return 'Fizz';
    if (n % 5 === 0) return 'Buzz';

    return n;
  });
}
