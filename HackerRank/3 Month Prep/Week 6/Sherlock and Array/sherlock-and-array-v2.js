function balancedSums(arr) {
    
    let total = arr.reduce((a,b) => a+b);
    let count = 0;
    
    for (let i = 0; i < arr.length; i++) {
		
        if (count == total - count - arr[i]) {
            return "YES";
        }
        count += arr[i];
    }
    return "NO";
}

// solution after realizing the trick mentioned in the discussion