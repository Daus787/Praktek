function longestSlideDown(pyramid) {
  const triangle = pyramid.map((row) => [...row]);
  for (let row = triangle.length - 2; row >= 0; row--) {
    for (let col = 0; col < triangle[row].length; col++) {
      triangle[row][col] += Math.max(
        triangle[row + 1][col],
        triangle[row + 1][col + 1]
      );
    }
  }
  return triangle[0][0];
}

console.log(longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]));
console.log(longestSlideDown([[10], [10, 20], [10, 10, 20], [10, 90, 10, 20]]));
