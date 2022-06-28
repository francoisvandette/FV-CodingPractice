public static List<Integer> missingNumbers(List<Integer> arr, List<Integer> brr) {
	Map<Integer, Integer> aRay = new TreeMap<Integer, Integer>();
	Map<Integer, Integer> bRay = new TreeMap<Integer, Integer>();
	
	// count elements of 'arr' and place into 'aRay' with key:value
	for (int i = 0; i < arr.size(); i++) {
		if (aRay.get(arr.get(i)) == null) {
			aRay.put(arr.get(i), 0);
		} 
		aRay.put(arr.get(i), aRay.get(arr.get(i))+1);
	}
	
	// count elements of 'brr' and place into 'bRay' with key:value
	for (int i = 0; i < brr.size(); i++) {
		if (bRay.get(brr.get(i)) == null) {
			bRay.put(brr.get(i), 0);
		} 
		bRay.put(brr.get(i), bRay.get(brr.get(i))+1);
	}
	
	// create and add any missing values to the result list
	List<Integer> result = new ArrayList<Integer>();
	for (Map.Entry<Integer, Integer> i : bRay.entrySet()) {
		// if the key does not exist in the aRay, add it to result
		if (aRay.containsKey(i.getKey()) == false) {
			result.add(i.getKey());
		} 
		// if there are more occurances in bRay, add it to result
		else if (i.getValue() - aRay.get(i.getKey()) > 0) {
			result.add(i.getKey());
		}
	}

	return result;
}