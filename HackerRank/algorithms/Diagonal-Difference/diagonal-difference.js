function diagonalDifference(arr) {
  // Write your code here
  // top-left to bottom-right sum
  let lsum = 0;
  for (let i = 0; i < arr.length; i++) {
    lsum += arr[i][i];
  }

  // creating counters for top-right to bottom-left
  let rsum = 0;
  let rowCount = 0;
  let colCount = arr.length - 1;

  // top-right to bottom-left sum
  for (let i = 0; i < arr.length; i++) {
    rsum += arr[rowCount][colCount];
    rowCount++;
    colCount--;
  }

  // getting the difference
  let absolute = lsum - rsum;

  // check to make sure it is positive
  if (absolute < 0) {
    absolute *= -1;
  }

  return absolute;
}