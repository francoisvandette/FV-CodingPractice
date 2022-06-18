// given problem, need to change at most 3 lines, no adding, moving, or removing any code
public static void findZigZagSequence(int [] a, int n){
	Arrays.sort(a);
	int mid = (n + 1)/2;
	int temp = a[mid];
	a[mid] = a[n - 1];
	a[n - 1] = temp;

	int st = mid + 1;
	int ed = n - 1;
	while(st <= ed){
		temp = a[st];
		a[st] = a[ed];
		a[ed] = temp;
		st = st + 1;
		ed = ed + 1;
	}
	for(int i = 0; i < n; i++){
		if(i > 0) System.out.print(" ");
		System.out.print(a[i]);
	}
	System.out.println();
}


// FIXED/REFACTOR : My Solution
// - adjusted the initial "mid" variable declaration to the proper mid index.
// - the "ed" declaration was originally set too far along the array, needed to have it be n-2 instead of n-1.
// - in the while loop, the "ed" variable needed to be going in the opposite direction of the "st" variable.
public static void findZigZagSequence(int [] a, int n){
	Arrays.sort(a);
	int mid = (n - 1)/2;
	int temp = a[mid];
	a[mid] = a[n - 1];
	a[n - 1] = temp;

	int st = mid + 1;
	int ed = n - 2;
	while(st <= ed){
		temp = a[st];
		a[st] = a[ed];
		a[ed] = temp;
		st = st + 1;
		ed = ed - 1;
	}
	for(int i = 0; i < n; i++){
		if(i > 0) System.out.print(" ");
		System.out.print(a[i]);
	}
	System.out.println();
}