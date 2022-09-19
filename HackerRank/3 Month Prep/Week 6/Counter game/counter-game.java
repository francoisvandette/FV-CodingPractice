class Result {

    public static String counterGame(long n) {
		// 'counter' keep track of the turn.
        int counter = 0;
		// copying 'n' so as not to manipulate it.
        long gameNumber = n;
        // condition, if Louise can not take action on her first turn, Richard wins.
        if (n == 1) {
            return "Richard";
        }
        
        while (gameNumber > 1) {
			// creating the highest power of 2 that is less than the gameNumber.
            long power = 2;
            while (power * 2 < gameNumber) {
                power *= 2;
            }
            // subtracting it per the game.
            gameNumber -= power;
			// incrementing the turn counter.
            counter++;
        }
        // logic to return the winner's name.
        if (counter % 2 == 0) {
            return "Richard";
        } else {
            return "Louise";
        }
    } 
}