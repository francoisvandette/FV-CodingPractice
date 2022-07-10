function migratoryBirds(arr) {
    // Write your code here
    let birds = {};
    
    // get counts of the birds
    for(let i of arr){
        if(!birds[i]){
            birds[i] = 1;
        } else {
            birds[i]++;
        }
    }
    
    // finds the quantity of the most frequent bird
    let b = Object.values(birds);
    let max = Math.max(...b);

    // finds the first instance where a bird id matches the max quantity
    for(let i in birds){
        if (birds[i] == max){
            return parseInt(i);
        }
    }
}