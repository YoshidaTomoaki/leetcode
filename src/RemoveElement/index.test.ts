import { removeElement } from '.';

describe('#removeElement', () => {
  test('case no.1', () => {
    const nums = [3, 2, 2, 3];
    const val = 3;
    expect(removeElement(nums, val)).toBe(2);
  });

  test('case no.2', () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const val = 2;
    expect(removeElement(nums, val)).toBe(5);
  });
});
