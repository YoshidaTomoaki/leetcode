import { subtractProductAndSum } from '.';

describe('#subtractProductAndSum', () => {
  test('case no1', () => {
    expect(subtractProductAndSum(234)).toBe(15);
  });

  test('case no2', () => {
    expect(subtractProductAndSum(4421)).toBe(21);
  });
});
