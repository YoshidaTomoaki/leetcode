/**
 * 1221. Split a String in Balanced Strings
 * @param s ex: 'RLRRLLRLRL'  output: 4
 */
function balancedStringSplit(s: string): number {
  let count;
  count = 0;

  // 0以上で、RとLの数が同数の時（= accが0の時）カウントを1加算
  s.split('').reduce((acc, cur) => {
    cur === 'R' ? acc++ : acc--;
    acc === 0 && count++;
    return acc;
  }, 0);

  return count;
}

/*
function balancedStringSplit(s: string): number {
  let count;
  count = 0;

  let balance;
  balance = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'R') {
      balance++;
    } else {
      balance++;
    }

    if (balance === 0) count++;
  }

  return count;
}
*/

export default balancedStringSplit;
