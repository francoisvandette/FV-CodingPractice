function flippingBits(n) {

  String.prototype.replaceAt = function (index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
  }

  // grab int(n) and change it to binary in a string
  let temp = n.toString(2);
  let zero = "0";

  // adding leading zeros
  while (temp.length < 32) {
    console.log("in the while");
    temp = zero.concat(temp);
  }

  // flipping the 1's and 0's
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] == '1') {
      temp = temp.replaceAt(i, '0');
    } else if (temp[i] == '0') {
      temp = temp.replaceAt(i, '1');
    }
  }

  // converting back to an integer and returning
  let output = parseInt(temp, 2);
  return output;
}