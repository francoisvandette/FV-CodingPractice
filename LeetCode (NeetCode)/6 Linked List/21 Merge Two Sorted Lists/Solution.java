/*
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]
 
Constraints:
The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        
        if ( list1 == null && list2 == null ) {
            return null;
        } else if ( list1 != null && list2 == null ) {
            return list1;
        } else if ( list1 == null && list2 != null ) {
            return list2;
        }
        
        ListNode curr1 = list1;
        ListNode curr2 = list2;
        ListNode head;
        ListNode current;
        
        if ( curr1.val <= curr2.val ) {
            head = new ListNode( curr1.val );
            curr1 = curr1.next;
        } else {
            head = new ListNode( curr2.val );
            curr2 = curr2.next;
        }
        
        current = head;
        
        while (curr1 != null || curr2 != null) {
            if ( curr1 != null && curr2 == null ) {
                current.next = curr1;
                curr1 = curr1.next;
            } else if ( curr1 == null && curr2 != null ) {
                current.next = curr2;
                curr2 = curr2.next;
            } else if ( curr1.val <= curr2.val ) {
                current.next = curr1;
                curr1 = curr1.next;
            } else {
                current.next = curr2;
                curr2 = curr2.next;
            }
            current = current.next;
        }
        
        return head;
    }
}