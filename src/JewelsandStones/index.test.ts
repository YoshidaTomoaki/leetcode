import { numJewelsInStones } from '.';

describe('#numJewelsInStones', () => {
  test('case 1', () => {
    expect(numJewelsInStones('aA', 'aAAbbbb')).toBe(3);
  });

  test('case 1', () => {
    expect(numJewelsInStones('z', 'ZZ')).toBe(0);
  });
});
