function minimumAbsoluteDifference(arr) {
    // makes a deep copy of the provided array & sorts it from smallest to largest
    let ray = JSON.parse(JSON.stringify(arr));
    ray.sort((a,b)=>{return a-b});
    
    // sets an initial absolute value using the first two values of the new sorted array
    let minAbs = Math.abs(ray[0] - ray[1]);
    
    // loops through the remaining sorted array, comparing the absolute value from the current iteration with the lowest absolute difference found
    for (let i = 1; i < ray.length-1; i++) {
        let loopAbs = Math.abs(ray[i] - ray[i+1]);
        if (loopAbs < minAbs) {
            minAbs = loopAbs;
        }
    }
    
    return minAbs;
}