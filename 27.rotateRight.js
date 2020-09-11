/*

Given a linked list, rotate the list to the right by k places, where k is non-negative.

Example 1:

Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL

Example 2:

Input: 0->1->2->NULL, k = 4
Output: 2->0->1->NULL
Explanation:
rotate 1 steps to the right: 2->0->1->NULL
rotate 2 steps to the right: 1->2->0->NULL
rotate 3 steps to the right: 0->1->2->NULL
rotate 4 steps to the right: 2->0->1->NULL

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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) 
{
    function listLength(head)
    {
        node = head;
        let i = 1;

        while(node.next)
        {
            i++;
            node = node.next;
        }

        return i;
    }

    function makeCircular(head)
    {
        let node = head;

        while (node.next)
            node = node.next;

        node.next = head;
        
        return;
    }

    function terminate(head, lastNode)
    {
        return;
    }

    //TODO: Address null linked list
    //TODO: Address single linked list
    
    length = listLength(head);
    makeCircular(head);
    node = head;

    for (i = 0; i < k; i++)
        node = node.next;

    let newHead = node.next;
    node.next = null;
    
    return newHead; 
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
                val: 13,
                next: null	
            }
        }
    }
}

const listB = 
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
                next: null	
            }
        }
    }
}

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

const list3 = null;

const list4 = 
{
    val: 5,
    next: null
}

const list5 = 
{
    val: 0,
    next: 
    {
        val: 1,
        next: 
        {
            val: 2,
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

const list7 = 
{
    val: 0,
    next: null
}

const list8 = 
{
    val: 2,
    next: 
    {
        val: 4, 
        next: 
        {
            val: 3,
            next: null
        }
    }
}

const list9 = 
{
    val: 5,
    next: 
    {
        val: 6,
        next: 
        {
            val: 4,
            next: null
        }
    }
}

let l1 = list5;
let k = 4;

console.log(JSON.stringify(l1, null, 4));

console.log(JSON.stringify(rotateRight(l1, k), null, 4));

