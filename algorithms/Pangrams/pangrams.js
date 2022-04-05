function pangrams(s) {
  // Write your code here
  // because case does not matter...
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = s.toLowerCase();

  // check to see if a letter is not present
  for (let i = 0; i < alphabet.length; i++) {
    if (result.indexOf(alphabet[i]) < 0) {
      return "not pangram";
    }
  }

  // this return only runs if all the letters were found
  return "pangram";
}