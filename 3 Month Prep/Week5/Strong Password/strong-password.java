public static int minimumNumber(int n, String password) {

	final String numbers = "0123456789";
	final String lower_case = "abcdefghijklmnopqrstuvwxyz";
	final String upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	final String special_characters = "!@#$%^&*()-+";
	
	int[] reqs = {1, 1, 1, 1};
	int toAdd = 0;
	
	for (int i = 0; i < n; i++) {
		char c = password.charAt(i);
		if (numbers.indexOf(c) > -1) {
			reqs[0] = 0;
		} else if (lower_case.indexOf(c) > -1) {
			reqs[1] = 0;
		} else if (upper_case.indexOf(c) > -1) {
			reqs[2] = 0;
		} else if (special_characters.indexOf(c) > -1) {
			reqs[3] = 0;
		}
	}
	
	for (int i = 0; i < reqs.length; i++) {
		toAdd += reqs[i];
	}
	
	while (n + toAdd < 6) {
		toAdd++;
	}
	
	return toAdd;
}