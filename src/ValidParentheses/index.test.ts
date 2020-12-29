import { nodeModuleNameResolver } from 'typescript';
import { isValid } from '.';

describe('#ValidPartheses', () => {
  const testString1 = '()';
  const testString2 = '()[]{}';
  const testString3 = '(]';
  const testString4 = '([)]';
  const testString5 = '{[]}';
  const testString6 = ')(){}';

  test('case no.1', () => {
    expect(isValid(testString1)).toBe(true);
  });

  test('case no.2', () => {
    expect(isValid(testString2)).toBe(true);
  });

  test('case no.3', () => {
    expect(isValid(testString3)).toBe(false);
  });

  test('case no.4', () => {
    expect(isValid(testString4)).toBe(false);
  });

  test('case no.5', () => {
    expect(isValid(testString5)).toBe(true);
  });

  test.only('case no.6', () => {
    expect(isValid(testString6)).toBe(false);
  });
});
