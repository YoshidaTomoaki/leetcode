import { fizzBuzz } from './FizzBuzz';

describe('FizzBuzz', () => {
  test('normal', () => {
    const expected = [
      1,
      2,
      'Fizz',
      4,
      'Buzz',
      'Fizz',
      7,
      8,
      'Fizz',
      'Buzz',
      11,
      'Fizz',
      13,
      14,
      'FizzBuzz',
    ];
    expect(fizzBuzz(15)).toEqual(expected);
  });
});
