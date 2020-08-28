/*
Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.

Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?


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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) 
{
    let length = 0;

    let a = head;

    while(a.next != null)
    {
        a = a.next;
        length++;
    }

    a = head;

    for (let i=0; (i < (length-n)); i++)
    {
        a = a.next;
    }

    if (a == null) return null;
    if (a.next == null) return null;

    let b = a.next;
    a.next = b.next;

    return head;       
};