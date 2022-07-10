public static List<Integer> rotateLeft(int d, List<Integer> arr) {
	// create new list to be the shifted version
	List<Integer> newArr = new ArrayList<Integer>();
	// start inserting into new list, 'd' is the index value to start at
	for (int i = d; i < arr.size(); i++) {
		newArr.add(arr.get(i));
	}
	// add the missing values from the beginning of the initial list
	for (int i = 0; i < d; i++) {
		newArr.add(arr.get(i));
	}
	return newArr;
}