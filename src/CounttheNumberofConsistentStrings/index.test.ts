import { countConsistentStrings } from '.';

describe('#countConsistentStrings', () => {
  test('case no1', () => {
    expect(
      countConsistentStrings('ab', ['ad', 'bd', 'aaab', 'baa', 'badab'])
    ).toBe(2);
  });

  test('case no2', () => {
    expect(
      countConsistentStrings('abc', ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc'])
    ).toBe(7);
  });

  test('case no3', () => {
    expect(
      countConsistentStrings('cad', [
        'cc',
        'acd',
        'b',
        'ba',
        'bac',
        'bad',
        'ac',
        'd',
      ])
    ).toBe(4);
  });
});
