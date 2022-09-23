/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]
 
Constraints:
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/


class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        
        Integer counter = 0;
        List<List<String>> result = new ArrayList<>();
        Map<String, Integer> check = new HashMap<>();
        
        for (int i = 0; i < strs.length; i++) {
            
            String sortedTemp = sortString(strs[i]);
            Integer index = check.get(sortedTemp);
            
            if ( index != null ) {
                List<String> inner = (List<String>) result.get(index);
                inner.add(strs[i]);
            } else {
                List<String> a = new ArrayList<>();
                a.add(strs[i]);
                result.add(a);
                check.put(sortedTemp, counter);
                counter++;
            }
        }

        return result;
    }
    
    private String sortString(String str) {
        char arr[] = str.toCharArray();
        Arrays.sort(arr);
        return new String(arr);
    }
}