/**
 * 1470. Shuffle the Array
 * TODO: きれいに書く
 * TODO: テスト書く
 */

function shuffle(nums: number[], n: number): number[] {
  const a = nums
    .map((v, i) => {
      if (i >= n) return;
      return v;
    })
    .filter((v) => v);

  const b = nums
    .map((v, i) => {
      if (i < n) return;
      return v;
    })
    .filter((v) => v);

  let r;
  r = [];

  for (let i = 0; i < n; i++) {
    r.push(a[i]);
    r.push(b[i]);
  }

  return r;
}

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
