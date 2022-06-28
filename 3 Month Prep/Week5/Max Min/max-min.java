public static int maxMin(int k, List<Integer> arr) {

	Collections.sort(arr);
	int unfairness = -1;
	
	for (int i = 0; i < arr.size()-k+1; i++) {
		int min = arr.get(i);
		int max = arr.get(i+k-1);
		
		if (unfairness == -1) {
			unfairness = max - min;
		} else if (unfairness > max - min) {
			unfairness = max - min;
		}
	}
	return unfairness;
}