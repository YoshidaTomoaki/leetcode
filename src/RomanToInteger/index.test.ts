import { romanToInt } from '.';

describe('official test case', (): void => {
  test('no.1', (): void => {
    const response: number = romanToInt('III');
    expect(response).toBe(3);
  });
});
