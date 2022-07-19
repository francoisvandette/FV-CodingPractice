function superDigit(n, k) {
    
	// if n is already a single digit, return it.
    if (n.length === 1) {
        return parseInt(n);
    }
    
	// creates the initial super digit that we will be boiling down, initString.
    let firstSum = BigInt(0);
    for (let i = 0; i < n.length; i++) {
        firstSum += BigInt(n.slice(i,i+1));
    }
    let initString = (firstSum * BigInt(k)).toString();
    
    while (initString.length > 1) {
        let sum = BigInt(0);
        for (let i = 0; i < initString.length; i++) {
            sum += BigInt(initString.slice(i,i+1));
        }
        initString = sum.toString();
    }
    
    return parseInt(initString);
}