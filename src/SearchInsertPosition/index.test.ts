import { searchInsert } from '.';

describe('SearchInsertPosition', () => {
  test('case no.1', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
  });

  test('case no.2', () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
  });

  test('case no.3', () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
  });

  test('case no.4', () => {
    expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
  });

  test('case no.5', () => {
    expect(searchInsert([1], 0)).toBe(0);
  });
});
