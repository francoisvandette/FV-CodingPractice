function matchingStrings(strings, queries) {
  // Write your code here
  let output = [];
  let count = 0;

  for (let i = 0; i < queries.length; i++) {
    count = 0;
    for (let j = 0; j < strings.length; j++) {

      if (strings[j] === queries[i]) {
        count++;
      }
    }
    output.push(count);
  }

  return output;
}