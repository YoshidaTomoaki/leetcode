/**
 * 1528. Shuffle String
 * @param s string
 * @param indices number[]
 */
/*
export function restoreString(s: string, indices: number[]): string {
  const characters = s.split('');
  const r = [];
  // 文字列を再生成する（文字列の長さ分1文字ずつ追加するループを回す）
  for (let i = 0; i < characters.length; i++) {
    // indicesのvalue = 何文字目か(i)
    // 0文字目から、indicesのindex番号に対応する文字(characters[j]を入れていく)
    for (let j = 0; j < indices.length; j++) {
      if (i === indices[j]) r.push(characters[j]);
    }
  }

  return r.join('');
}
*/

export function restoreString(s: string, indices: number[]): string {
  const characters = s.split('');

  return characters
    .map((c, i) => {
      return indices.reduce(
        (acc, cur, j) => (i === cur ? characters[j] : acc),
        ''
      );
    })
    .join('');
}
