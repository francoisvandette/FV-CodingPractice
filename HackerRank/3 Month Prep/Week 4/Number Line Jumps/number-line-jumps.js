function kangaroo(x1, v1, x2, v2) {
    // set variables to keep track of positions while looping.
    let onePos = x1;
    let twoPos = x2;
	// count is used to track the number of times the absolute difference changes to end the while loop. Begins at -1 because in the first loop oldAbs and currAbs will be the same.
    let count = -1;
	// oldAbs and currAbs are used to track whether the absolute difference is getting larger or staying the same, getting smaller is already covered.
    let oldAbs = Math.abs(onePos - twoPos);
    
    while (count <= 2) {
		// grabs the current absolute difference.
        let curAbs = Math.abs(onePos - twoPos);
		// if both positions are the same during a loop, returns `YES`.
        if (onePos == twoPos) {
            return `YES`;
        }
		// if the absolute difference is the same or larger than the old absolute value, replace the oldAbs value and increment count.
		else if (curAbs >= oldAbs) {
            oldAbs = curAbs;
            count++;
        } 
		// if the trend of larger or equal absolute difference ends, then reset the count.
		else {
            count = 0;
        }
        onePos += v1;
        twoPos += v2;
    }
    return `NO`;
}