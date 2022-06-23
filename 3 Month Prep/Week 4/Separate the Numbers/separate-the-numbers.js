function separateNumbers(s) {
  
    for (let i = 0; i < Math.floor(s.length/2); i++) {
        let compareStr = "";
        // grabs the initial set of digits
            // BigInt is necessary as values can be too large for a regular number primitive.
        const firstNum = BigInt(s.substring(0,i+1));
        let incNum = firstNum;
        // loop creates the string for comparing
        while (compareStr.length < s.length) {
            // adds the value to temp in string form
            compareStr += incNum;
            incNum++;
        }
        if (compareStr === s) {
            console.log("YES " + firstNum);
            return;
        }
    }
    console.log("NO");
}