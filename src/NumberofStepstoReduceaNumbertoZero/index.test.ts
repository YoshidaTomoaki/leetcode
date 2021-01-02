import { numberOfSteps } from '.';

describe('#numberOfSteps', () => {
  test('case no1', () => {
    expect(numberOfSteps(14)).toBe(6);
  });

  test('case no2', () => {
    expect(numberOfSteps(8)).toBe(4);
  });

  test('case no3', () => {
    expect(numberOfSteps(123)).toBe(12);
  });
});
