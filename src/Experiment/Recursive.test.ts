import { sum, multi } from './Recursive';

describe('sum', () => {
  test('sum normal', () => {
    expect(sum(5)).toBe(15);
  });
});

describe('multi', () => {
  test('multi normal', () => {
    expect(multi(5)).toBe(120);
  });
});
