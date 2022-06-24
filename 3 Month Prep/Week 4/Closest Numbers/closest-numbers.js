function closestNumbers(arr) {
    // sort the provided array from smallest to largest
    arr.sort(function(a,b){return a-b});
    let result = [arr[0], arr[1]];
    // set an initial smallest difference 
    let smallestDiff = Math.abs(arr[0] - arr[1]);
    
    for (let i = 2; i < arr.length; i++) {
        // calculates the current difference in this interation of the loop
        const currDiff = Math.abs(arr[i-1] - arr[i]);
        if (currDiff < smallestDiff) {
            // change smallestDiff to the newly discovered smallest
            smallestDiff = currDiff;
            // delete the contents of the array
            result = [];
            // insert the new pair
            result.push(arr[i-1]);
            result.push(arr[i]);
        } else if (currDiff == smallestDiff) {
            result.push(arr[i-1]);
            result.push(arr[i]);
        }
    }
    return result;
}