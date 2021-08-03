/*
Write a program to find the node at which the intersection of two singly linked lists begins.

For example, the following two linked lists:

begin to intersect at node c1.

 

Example 1:

Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Reference of the node with value = 8
Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.

 

Example 2:

Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Reference of the node with value = 2
Input Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.

 

Example 3:

Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: null
Input Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
Explanation: The two lists do not intersect, so return null.

 

Notes:

    If the two linked lists have no intersection at all, return null.
    The linked lists must retain their original structure after the function returns.
    You may assume there are no cycles anywhere in the entire linked structure.
    Each value on each linked list is in the range [1, 10^9].
    Your code should preferably run in O(n) time and use only O(1) memory.


*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) 
{
    console.log('enter');
    if (headA == null) return null;
    if (headB == null) return null;
    
    if (headA.next == null) return null;
    if (headB.next == null) return null;

    if (headA == headB) return headA;
    
    if (headA.next.val == headB.next.val) return headA.next.val;

    mapA = new Map();
    mapB = new Map();

    a = headA;
    b = headB;
    
    while ((a.next != null) || (b.next != null))
    {
        console.log('while');
        if (a.next != null) mapA.set(a.val);
        if (b.next != null) mapB.set(b.val);

        if (mapA.has(b.val)) return b.val;
        if (mapB.has(a.val)) return a.val;

        if (a.next != null) a = a.next;
        if (b.next != null) b = b.next;
    }
    return null; 
};

const listA = 
{
    val: 6,
    next: 
    {
        val: 10,                                            
        next: 
        {
            val: 12,
            next: 
            {
                val: 3,
                next: null	
            }
        }
    }
}

const listB = 
{
    val: 6,
    next: 
    {
        val: 10,                                            
        next: 
        {
            val: 12,
            next: 
            {
                val: 3,
                next: null	
            }
        }
    }
}

//istA = [4,1,8,4,5], listB = [5,6,1,8,4,5]
const list1 = 
{
    val: 4,
    next: 
    {
        val: 1,                                            
        next: 
        {
            val: 8,
            next: 
            {
                val: 4,
                next: 
                {
                    val: 5,
                    next: null
                }
            }
        }
    }
}

const list2 = 
{
    val: 5,
    next: 
    {
        val: 6,                                            
        next: 
        {
            val: 1,
            next: 
            {
                val: 8,
                next: 
                {
                    val: 4,
                    next:
                    {
                        val: 5,
                        next: null
                    } 
                }
            }
        }
    }
}

//
const list3 = 
{
    val: 5,
    next: 
    {
        val: 6,                                            
        next: 
        {
            val: 1,
            next: 
            {
                val: 8,
                next: 
                {
                    val: 4,
                    next:
                    {
                        val: 5,
                        next: null
                    } 
                }
            }
        }
    }
}

const list4 = 
{
    val: 5,
    next: 
    {
        val: 6,                                            
        next: 
        {
            val: 1,
            next: 
            {
                val: 8,
                next: 
                {
                    val: 4,
                    next:
                    {
                        val: 5,
                        next: null
                    } 
                }
            }
        }
    }
}

const list5 = 
{
    val: 5,
    next: 
    {
        val: 6,                                            
        next: 
        {
            val: 1,
            next: 
            {
                val: 8,
                next: 
                {
                    val: 4,
                    next:
                    {
                        val: 5,
                        next: null
                    } 
                }
            }
        }
    }
}

const list6 = 
{
    val: 5,
    next: 
    {
        val: 6,                                            
        next: 
        {
            val: 1,
            next: 
            {
                val: 8,
                next: 
                {
                    val: 4,
                    next:
                    {
                        val: 5,
                        next: null
                    } 
                }
            }
        }
    }
}
console.log(getIntersectionNode(list1, list2));


