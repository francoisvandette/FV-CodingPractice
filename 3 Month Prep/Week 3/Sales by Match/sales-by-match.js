function sockMerchant(n, ar) {
    // Write your code here
    let socks = {};
    let numOfPairs = 0;
    
    // loop through the array, create object with number of socks by colour
    for(let i = 0; i < n; i++) {
        // checks if it exists, creates if it not at sets it to 1 default
        if(!socks[ar[i]]){
            socks[ar[i]] = 1;
        } else {
            socks[ar[i]]++;
        }
    }

    // iterate over key:value object
    for(let color in socks) {
        // gets the number of pairs, floors it to remove decimal
        let pairs = Math.floor(socks[color] / 2);
        // adds it to the total number of pairs
        numOfPairs += pairs;
    }
    
    return numOfPairs;
}