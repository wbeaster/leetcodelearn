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
    let node = null;

    while (l1 != null || l2 != null)
    {
        if (l1 != null)
        {
            node.next = l1;
            l1 = l1.next;
        }

        if (l2 != null)
        {
            node.next = l2;
            l2 = l2.next;
        }
        if (node.next != null) node = node.next;
    }

    return node;
    
};

//even false
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

//even true
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
                val: 1,
                next: null	
            }
        }
    }
}

//odd true
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
                val: 2,
                next: 
                {
                    val: 1,
                    next: null
                }
            }
        }
    }
}

//odd true
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
                    val: 3,
                    next:
                    {
                        val: 2,
                        next: 
                        {
                            val: 1,
                            next: null
                        }
                    } 
                }
            }
        }
    }
}

//null false
const list3 = null;

//single item true
const list4 = 
{
    val: 5,
    next: null
}

//odd false
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
//test NULL list and single item list
console.log(mergeTwoLists(listA, listB));