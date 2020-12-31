import { interpret } from '.';

describe('#interpret', () => {
  test('case 1', () => {
    expect(interpret('G()(al)')).toBe('Goal');
  });

  test('case 2', () => {
    expect(interpret('G()()()()(al)')).toBe('Gooooal');
  });

  test('case 3', () => {
    expect(interpret('(al)G(al)()()G')).toBe('alGalooG');
  });
});
