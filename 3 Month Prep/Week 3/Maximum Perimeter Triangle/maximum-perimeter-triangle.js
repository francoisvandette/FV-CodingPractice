function maximumPerimeterTriangle(sticks) {
    // sticks sorted from largest to smallest
    sticks.sort(function(a, b){return b - a;});
    
    for(let i = 0; i < sticks.length-2; i++) {
        // creating a trio to compare
        let temp = [sticks[i], sticks[i+1], sticks[i+2]];
        
        if (temp[0] < temp[1] + temp[2]) {
            // first trio where this is true is:
                // - the largest maximum size
                // - will have the longest minimum side
            // returned from lowest to highest per the reqs
            return temp.sort(function(a, b){return a - b;});
        }
    }
    return [-1];
}