function marsExploration(s) {
  // Write your code here
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] != 'S') {
      counter++;
    }
    i++;
    if (s[i] != 'O') {
      counter++;
    }
    i++;
    if (s[i] != 'S') {
      counter++;
    }
  }

  return counter;
}