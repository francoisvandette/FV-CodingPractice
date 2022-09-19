function countingValleys(steps, path) {
  // Write your code here
  let counter = 0;
  let nextStep = 0;
  let prevStep = 0;
  let numberOfValleys = 0;

  for (let i = 0; i < path.length; i++) {
    if (path[i] == 'U') {
      prevStep = 1;
      counter++;
    } else if (path[i] == 'D') {
      prevStep = -1;
      counter--;
    }

    if (counter == 0 && prevStep > 0) {
      numberOfValleys++;
    }

  }

  return numberOfValleys;
}