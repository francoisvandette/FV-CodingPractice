class Solution {
    public int maxProfit(int[] prices) {
        int min = Integer.MAX_VALUE;
        int max = -1;
        int result = 0;
        
        for (int i = 0; i < prices.length; i++) {
            if (prices[i] < min) {
                min = prices[i];
                max = -1;
            } else if (prices[i] > max) {
                max = prices[i];
                if (max - min > result) {
                    result = max - min;
                }
            }
        }
        
        return result;
    }
}