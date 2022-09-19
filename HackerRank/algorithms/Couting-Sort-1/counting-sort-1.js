function countingSort(arr) {
  // Write your code here
  let output = [];

  // setting default "0" value for all 100 spots in the output array
  for (let i = 0; i < 100; i++) {
    output.push(0);
  }

  // counting the instances of the numbers from arr
  for (let i = 0; i < arr.length; i++) {
    output[arr[i]]++;
  }

  return output;
}