function lonelyinteger(a) {
    // Write your code here
    let count = 0;

    for(let i = 0; i < a.length; i++){
        count = 0;
    
        for(let j = 0; j < a.length; j++){
            if(i === j){
                // do nothing
            } else if(a[i] == a[j]){
                count++;
            }
        }
    
        if(count === 0){
            return a[i];
        }
    
    }
}