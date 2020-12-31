import { defangIPaddr } from '.';

describe('#defangIPaddr', () => {
  test('case1', () => {
    expect(defangIPaddr('1.1.1.1')).toBe('1[.]1[.]1[.]1');
  });

  test('case2', () => {
    expect(defangIPaddr('255.100.50.0')).toBe('255[.]100[.]50[.]0');
  });
});
