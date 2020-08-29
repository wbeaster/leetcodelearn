/*
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?

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
 * @return {ListNode}
 */
var reverseList = function(head) 
{
    if (head == null) return null;
    if (head.next == null) return head;
    
    let current = head;
    let previous = null;

    let reachedEnd = false;

    while (!reachedEnd)
    {
        let temp = current.next;

        current.next = previous;

        previous = current;

        current = temp;    

        if (current == null) reachedEnd = true;
    }

    return previous;    
};

const list = 
{
    value: 6,
    next: 
    {
        value: 10,                                            
        next: 
        {
            value: 12,
            next: 
            {
                value: 3,
                next: null	
            }
        }
    }
}

console.log(JSON.stringify(list, null, 4));
console.log();
console.log(JSON.stringify(reverseList(list), null, 4));
