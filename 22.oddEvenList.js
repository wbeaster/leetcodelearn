/*
Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Example 1:

Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL

Example 2:

Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL

 

Constraints:

    The relative order inside both the even and odd groups should remain as it was in the input.
    The first node is considered odd, the second node even and so on ...
    The length of the linked list is between [0, 10^4].
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
var oddEvenList = function(head) 
{
    if (head == null) return head;
    if (head.next == null) return head;
    if (head.next.next == null) return head;

    let oddHead = head;
    let oddNode = head;
    let evenHead = head.next;
    let evenNode = head.next;
    
    node = head.next.next;
    let odd = true;

    while(node)
    {
        if (odd)
        {
            oddNode.next = node;
            oddNode = oddNode.next;
            odd = false;
        }
        else
        {
            evenNode.next = node;
            evenNode = evenNode.next;
            odd = true;
        }
        node = node.next;
    }

    if (evenNode.next) evenNode.next = null;
    oddNode.next = evenHead;
    return oddHead;    
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
    val: 1,
    next: 
    {
        val: 2,                                            
        next: 
        {
            val: 3,
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

//Input:  1->2->6->3->4->5->6, val = 6
const list2 = 
{
    val: 1,
    next: 
    {
        val: 2,                                            
        next: 
        {
            val: 3,
            next: 
            {
                val: 4,
                next: 
                {
                    val: 5,
                    next:
                    {
                        val: 6,
                        next: 
                        {
                            val: 7,
                            next: null
                        }
                    } 
                }
            }
        }
    }
}

//
const list3 = 
{
    val: 1,
    next: 
    {
        val: 2,
        next: 
        {
            val: 3,
            next: 
            {
                val: 4,
                next: 
                {
                    val: 5,
                    next:
                    {
                        val: 6,
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
    val: 1,
    next: 
    {
        val: 2,                                            
        next: 
        {
            val: 3,
            next: null
        }
    }
}

const list6 = 
{
    val: 1,
    next: 
    {
        val: 2,
        next: null
    } 
}

let list = list5;
//let num  = 6;
//let list = list6;
//let num  = 1;
//let list = list5;
//let num  = 2;


console.log(JSON.stringify(list, null, 4));
//console.log();
console.log(JSON.stringify(oddEvenList(list), null, 4));