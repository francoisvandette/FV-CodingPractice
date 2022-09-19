public static String caesarCipher(String s, int k) {
	// making sure the shift is no larger than the length of the alphabet
	int shift = k % 26;
	final String alphaLower = "abcdefghijklmnopqrstuvwxyz";
	final String alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	String encryptedMessage = "";
	
	// lowercase caesar cipher creation
	String caesarLower = alphaLower.substring(shift);
	for (int i = 0; i < shift; i++) {
		caesarLower += alphaLower.charAt(i);
	}
	
	// uppercase caesar cipher creation
	String caesarUpper = alphaUpper.substring(shift);
	for (int i = 0; i < shift; i++) {
		caesarUpper += alphaUpper.charAt(i);
	}
	
	// writing the message in the cipher
	for (int i = 0; i < s.length(); i++) {
		char letter = s.charAt(i);
		if (alphaLower.indexOf(letter) >= 0) {
			encryptedMessage += caesarLower.charAt(alphaLower.indexOf(letter));
		} else if (alphaUpper.indexOf(letter) >= 0) {
			encryptedMessage += caesarUpper.charAt(alphaUpper.indexOf(letter));
		} else {
			encryptedMessage += s.charAt(i);
		}
	}
	
	return encryptedMessage;
}