function pickingNumbers(a) {
    let countArr = [];
    // count the quantities for each number and put that value in the index.
    for (let i = 0; i < a.length; i++) {
        if (countArr[a[i]] === undefined) {
            countArr[a[i]] = 0;
        }
        countArr[a[i]]++;
    }
    // add zeros for any index that does not have an entry.
    for (let i = 0; i < countArr.length; i++) {
        if (countArr[i] === undefined) {
            countArr[i] = 0;
        }
    }
    
    let maxLength = 0;
    // loops through the countArr comparing the sum of 'i' & 'i+1', and setting it to 'maxLength' if it is larger.
    for (let i = 0; i < countArr.length-1; i++) {
        let sum = countArr[i] + countArr[i+1];
        if (sum > maxLength) {
            maxLength = sum;
        }
    }
    
    return maxLength;
}