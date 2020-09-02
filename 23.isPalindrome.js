/*
Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false

Example 2:

Input: 1->2->2->1
Output: true

Follow up:
Could you do it in O(n) time and O(1) space?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function checkPalindrome(what_goes_here)
{
    if (count != frontCount)
        checkPalindrome(front.next, count+1, frontCount, back)
    
    
    if (a.val == b.val)

}

function findFront(head, length)
{
    let node = head;
    let i = 0;

    while (i < (length / 2))
    {
        node = node.next;
        i++
    }

    return node;
}

 var isPalindrome = function(head) 
{
    if (head == null) return false;
    if (head.next == null) return true;
    
    let length = 0;
    let node = head;

    while (node)
    {
        length++;
        node = node.next;
    }

    if (length % 2 == 0)
        let even = true;
    else
        let even = false;

    let front = findFront(head, length);

    if (even) 
        let back = front.next;
    else
        let back = front.next.next;

    return checkPalindrome(head, back);    
};