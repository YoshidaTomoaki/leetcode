// 参考: https://suwaru.tokyo/%E3%80%90%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0%E6%80%A7%E8%83%BD%E8%A9%95%E4%BE%A1%E3%80%91big-o%E3%82%AA%E3%83%BC%E3%83%80%E3%83%BC%E8%A8%98%E6%B3%95%E3%82%92%E3%82%84%E3%81%95/

const arr4 = [...Array(4)].map((_, i) => i++);
const arr10000 = [...Array(10000)].map((_, i) => i++);
/**
 * O(1)
 * 要素が多くなっても決まった処理しか行われない
 * よって、処理時間は常に一定である
 */
function log(arr) {
  console.log(arr[0]);
  console.log(arr[1]);
}
log(arr4);
log(arr10000);

/**
 * O(N)
 * データ量（N）に比例して計算量も増えていく
 * - 線形探索
 */
function logAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
logAll(arr4);
logAll(arr10000);

/**
 * O(N^2)
 * 多重ループの構造だと「指数的爆発」が起きて非常に遅くなる
 * データが多いとクラッシュする可能性もあるので注意
 */
function addAndLog(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(`${arr[i]} : ${arr[j]}`);
    }
  }
}
addAndLog(arr4);
addAndLog(arr10000);

/**
 * O(logN)
 * データ量に対して、計算量を常に半分にしていくのですごく早い
 * データ量が 4000 あっても 12 回の処理で完了する
 * - ２分探索
 */
function binarySearch(arr, key) {
  let low;
  low = 0;
  let height;
  height = arr.length - 1;
  let mid;
  let element;

  while (low <= height) {
    mid = Math.floor(low + height / 2);
    element = arr[mid];
    if (element < key) {
      low = mid + 1;
    } else if (element > key) {
      height = mid - 1;
    } else {
      return mid;
    }
  }

  throw new Error('not found key');
}
// 第一引数の配列から、第二引数の値のインデックスを発見する
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3));
