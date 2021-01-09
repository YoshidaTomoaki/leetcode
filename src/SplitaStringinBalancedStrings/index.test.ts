import balancedStringSplit from '.';

describe('#balancedStringSplit', () => {
  test('case 1', () => {
    expect(balancedStringSplit('RLRRLLRLRL')).toBe(4);
  });

  test('case 2', () => {
    expect(balancedStringSplit('RLLLLRRRLR')).toBe(3);
  });

  test('case 3', () => {
    expect(balancedStringSplit('LLLLRRRR')).toBe(1);
  });

  test('case 4', () => {
    expect(balancedStringSplit('RLRRRLLRLL')).toBe(2);
  });
});
