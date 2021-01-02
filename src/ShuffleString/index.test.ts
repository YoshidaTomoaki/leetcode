import { restoreString } from '.';

describe('#restoreString', () => {
  test('case no1', () => {
    expect(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3])).toBe(
      'leetcode'
    );
  });

  test('case no2', () => {
    expect(restoreString('abc', [0, 1, 2])).toBe('abc');
  });

  test('case no3', () => {
    expect(restoreString('aiohn', [3, 1, 4, 2, 0])).toBe('nihao');
  });

  test('case no4', () => {
    expect(restoreString('aaiougrt', [4, 0, 2, 6, 7, 3, 1, 5])).toBe(
      'arigatou'
    );
  });

  test('case no5', () => {
    expect(restoreString('art', [1, 0, 2])).toBe('rat');
  });
});
