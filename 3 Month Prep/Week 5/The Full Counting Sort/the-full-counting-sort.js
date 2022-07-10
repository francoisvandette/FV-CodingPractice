function countSort(arr) {
    
    // replace the first half of the array strings with a '-'.
    for (let i = 0; i < arr.length/2; i++) {
        arr[i][1] = '-';
    }
    
    // find highest integer value, this is to avoid extra steps in the next loop.
    let highest = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] > highest) {
            highest = arr[i][0];
        }
    }
    
    // create new array with properly sorted elements.
    let ray = [];
    for (let i = 0; i <= highest; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j][0] == i) {
                ray.push(arr[j]);
            }
        }
    }
    
    // create string, concat the string values to it.
    let str = "";
    for (let i = 0; i < ray.length; i++) {
        str += ray[i][1] + " ";
    }
    str = str.trimEnd();
    
    // the return
    console.log(str);
}