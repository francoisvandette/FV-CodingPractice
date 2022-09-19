function gradingStudents(grades) {
  // Write your code here
  let output = [];

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38) {

      let temp = grades[i];
      while (temp % 5 != 0) {
        temp++;
      }

      if (temp - grades[i] < 3) {
        grades[i] = temp;
      }

      output.push(grades[i]);

    } else {
      output.push(grades[i]);
    }
  }

  return output;
}