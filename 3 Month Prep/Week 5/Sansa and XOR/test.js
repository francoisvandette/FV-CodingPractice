function sansaXor(arr) {
    // Write your code here
    // let result = 0;
    // if (arr.length % 2 == 0) {
    //     return 0;
    // } else {
    //     for (let i = 0; i < arr.length; i += 2) {
    //         result = result ^ arr[i];
    //     }
    // }
    // return result;
    
    let ray = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j+i+1 <= arr.length; j++) {
            ray.push(xorArray(arr.slice(j,j+i+1)));
        }
    }
    // console.log(ray);
    
    return xorArray(ray);
}

function xorArray(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result = result ^ arr[i];
    }
    return result;
}