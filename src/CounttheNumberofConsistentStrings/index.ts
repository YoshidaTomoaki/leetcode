/**
 * ex:
 * Input: allowed = "ab",
 * words = ["ad","bd","aaab","baa","badab"]
 * Output: 2
 * @param allowed
 * @param words
 */

export function countConsistentStrings(
  allowed: string,
  words: string[]
): number {
  const allowWords = allowed.split('');
  return words.filter((word) =>
    word.split('').every((w) => allowWords.includes(w))
  ).length;
}
