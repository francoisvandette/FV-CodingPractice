function birthday(s, d, m) {
    // Write your code here
    let numberOfWays = 0;
    for(let i = 0; i < s.length - m + 1; i++) {
        let sum = 0;
        for(let j = 0; j < m; j++) {
            sum += s[i+j];
        }
        if (sum === d) {
            numberOfWays++;
        }
    }
    return numberOfWays;
}