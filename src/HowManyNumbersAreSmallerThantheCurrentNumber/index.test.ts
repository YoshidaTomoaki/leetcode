import { smallerNumbersThanCurrent } from '.';

describe.skip('#smallerNumbersThanCurrent', () => {
  test('case no1', () => {
    expect(smallerNumbersThanCurrent([8, 1, 2, 2, 3])).toBe([4, 0, 1, 1, 3]);
  });

  test('case no2', () => {
    expect(smallerNumbersThanCurrent([6, 5, 4, 8])).toBe([2, 1, 0, 3]);
  });

  test('case no3', () => {
    expect(smallerNumbersThanCurrent([7, 7, 7, 7])).toBe([0, 0, 0, 0]);
  });
});
