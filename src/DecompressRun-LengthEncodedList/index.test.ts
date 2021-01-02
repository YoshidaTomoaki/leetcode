import { decompressRLElist } from '.';

describe.skip('#decompressRLElist', () => {
  test('case no1', () => {
    expect(decompressRLElist([1, 2, 3, 4])).toBe([2, 4, 4, 4]);
  });

  test('case no1', () => {
    expect(decompressRLElist([1, 1, 2, 3])).toBe([1, 3, 3]);
  });
});
