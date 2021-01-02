/**
 * 1342. Number of Steps to Reduce a Number to Zero
 * @param num
 */
export function numberOfSteps(num: number): number {
  let steps = 0;

  while (num !== 0) {
    steps += 1;

    if (num % 2 === 1) {
      num = num - 1;
      continue;
    }

    num = num / 2;
  }

  return steps;
}
