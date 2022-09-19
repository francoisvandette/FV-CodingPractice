function rotateLeft(d, arr) {
    for (let i = 0; i < d; i++) {
		// store the value at index 0
        let temp = arr[0];
		// delete it from the array
        arr.shift();
		// push the stored value back into the array at the end
        arr.push(temp);
    }
    return arr;
}