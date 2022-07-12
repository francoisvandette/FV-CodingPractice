function balancedSums(arr) {

    let index = Math.floor(arr.length/2);
    let visitedIndexes = [];
    let left = 0;
    let right = 0;
    
    // left count
    for(let l = 0; l < index; l++) {
        left += arr[l];
    }
    // right count
    for(let r = arr.length-1; r > index; r--) {
        right += arr[r];
    }
    
    while(true) {
        
        if (left == right) {
            return "YES";
        }
        
        if (left > right) {
            if (visitedIndexes.includes(index)) {return "NO";}
            visitedIndexes.push(index);
            index--;
            left -= arr[index];
            right += arr[index+1];
        } else {
            if (visitedIndexes.includes(index)) {return "NO";}
            visitedIndexes.push(index);
            index++;
            right -= arr[index];
            left += arr[index-1];
        }
    }
}