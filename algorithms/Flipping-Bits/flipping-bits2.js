function flippingBits(n) {

  // grab int(n) and change it to binary in a string
  let temp = n.toString(2);
  let zero = "0";
  let change = "";

  // adding leading zeros
  while (temp.length < 32) {
    console.log("in the while");
    temp = zero.concat(temp);
  }

  // flipping the 1's and 0's
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] == '1') {
      change = change.concat('0');
    } else if (temp[i] == '0') {
      change = change.concat('1');
    }
  }

  // converting back to an integer and returning
  let output = parseInt(change, 2);
  return output;
}