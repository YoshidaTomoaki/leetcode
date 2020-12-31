/**
 * 1431. Kids With the Greatest Number of Candies
 */
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const key = Math.max(...candies);
  return candies.map((v) => v + extraCandies >= key);
}

console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
