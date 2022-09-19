public static void updateLeapYear(int year) {
	if(year % 400 == 0) {
		month[2] = 29;	// originally it was = 28, this was incorrect.
	} else if(year % 100 == 0) {
		month[2] = 28;	// originally it was = 29, this was incorrect.
	} else if(year % 4 == 0) {
		month[2] = 29;
	} else {
		month[2] = 28;
	}
}

public static void storeMonth() {
	month[1] = 31;
	month[2] = 28;
	month[3] = 31;
	month[4] = 30;
	month[5] = 31;
	month[6] = 30;
	month[7] = 31;
	month[8] = 31;
	month[9] = 30;
	month[10] = 31;
	month[11] = 30;
	month[12] = 31;
}

public static int findPrimeDates(int d1, int m1, int y1, int d2, int m2, int y2) {
	storeMonth();

	int result = 0;

	while(true) {
		int x = d1;
		x = x * 100 + m1;
		x = x * 10000 + y1;		// originally it was "x * 1000 + y1", which did not allow for enough room for the year to added in.
		if(x % 4 == 0 || x % 7 == 0) {	// originally the IF tested for AND, just changed it to OR
			result = result + 1;
		}
		if(d1 == d2 && m1 == m2 && y1 == y2) {
			break;
		}
		updateLeapYear(y1);
		d1 = d1 + 1;
		if(d1 > month[m1]) {
			m1 = m1 + 1;
			d1 = 1;
			if(m1 > 12) {
				y1 =  y1 + 1;
				m1 = 1;			// the month was not being set back to 1 when the year turned over.
			}
		}
	}
	return result;
}