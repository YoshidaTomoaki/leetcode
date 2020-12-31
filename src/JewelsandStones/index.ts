/**
 * 771. Jewels and Stones
 * You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have.
 * Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
 * @param jewels ex: "aA"
 * @param stones ex: "aAAbbbb"
 * ex: return 3
 */
export function numJewelsInStones(jewels: string, stones: string): number {
  const jewelsKeys = jewels.split('');
  const stonesKeys = stones.split('');

  return jewelsKeys.reduce((jAcc, jCur) => {
    return (
      jAcc +
      stonesKeys.reduce((sAcc, sCur) => {
        if (jCur === sCur) return (sAcc += 1);
        return sAcc;
      }, 0)
    );
  }, 0);
}
