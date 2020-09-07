/*
Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) 
{
    if (l1 == null) return l2;
    if (l2 == null) return l1;

    let node = null;
    if (l1.val < l2.val)
    {
        node = l1;
        l1 = l1.next;
    }
    else
    {
        node = l2;
        l2 = l2.next;
    }
    let newHead = node;

    while (l1 != null || l2 != null)
    {
        if (l1 == null)
        {
            node.next = l2;
            break;
        }

        if (l2 == null)
        {
            node.next = l1;
            break;
        }

        if (l1.val < l2.val)
        {
            node.next = l1;
            l1 = l1.next;
        }
        else
        {
            node.next = l2;
            l2 = l2.next;
        }
        node = node.next;
    }

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
            val: 2,
            next: 
            {
                val: 3,
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

let l1 = list3;
let l2 = list3;
//let num  = 6;
//let list = list6;
//let num  = 1;
//let list = list5;
//let num  = 2;


console.log(JSON.stringify(l1, null, 4));
console.log(JSON.stringify(l2, null, 4));
//console.log();
//test NULL list and single item list
console.log(JSON.stringify(mergeTwoLists(l1, l2), null, 4));