/**
 * 9. Palindrome Number
 * @param x number
 *
 * TODO: Could you solve it without converting the integer to a string?
 */

export function isPalindrome(x: number): boolean {
  const arr = x.toString().split('');
  // array.reverse()はin-placeなので、slice()で新しく配列を生成してから使って比較する。
  const reverse = arr.slice().reverse();

  return !!(arr.join() === reverse.join());
}
