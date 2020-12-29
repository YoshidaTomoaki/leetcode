/**
 * 20. Valid Parentheses
 * @param s string
 */

export function isValid(s: string): boolean {
  // stringが1文字以上で無い場合エラー
  if (s.length < 0) throw new Error('empty string');

  const stack = [];
  const dict = { '(': ')', '{': '}', '[': ']' };
  const arr = s.split('');

  arr.forEach((v, i) => {
    // カッコ開始文字の場合、スタックに追加
    if (Object.keys(dict).find((key) => key === v)) {
      stack.push(v);
      return;
    }

    // カッコ終了文字の場合
    if (Object.values(dict).find((val) => val === v)) {
      // スタックの最後の文字が対応するカッコ開始文字の場合スタックから削除、違う場合スタックに入れる
      if (
        Object.entries(dict).find(
          ([key, val]) => val === v && key === stack[stack.length - 1]
        )
      ) {
        stack.pop();
        return;
      } else {
        stack.push(v);
        return;
      }
    }

    return;
  });

  // カッコの開始と終了が対応していない組み合わせがある場合false
  return stack.length === 0;
}
