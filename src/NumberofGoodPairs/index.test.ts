import { numIdenticalPairs } from '.';

describe('#numIdenticalPairs', () => {
  test('case 1', () => {
    expect(numIdenticalPairs([1, 2, 3, 1, 1, 3])).toBe(4);
  });

  test('case 2', () => {
    expect(numIdenticalPairs([1, 1, 1, 1])).toBe(6);
  });

  test('case 3', () => {
    expect(numIdenticalPairs([1, 2, 3])).toBe(0);
  });
});
