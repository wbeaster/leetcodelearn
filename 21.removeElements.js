/*
Remove all elements from a linked list of integers that have value val.

Example:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5

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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) 
{
    if (head == null) return null;
    if (head.next == null)
    {
        if (head.val == val) return null;
    }
    if (val == null) return head;

    let node = head;
    let newHead = head;

    if (node.val == val)
    {
        node = node.next;
        while (node.val == val)
        {
            node = node.next;
            if (node == null) return null;
        }
        newHead = node;
    }
    
    while (node.next != null)
    {
        if (node.next.val == val)
        {
            while (node.next.val == val)
            {
                node.next = node.next.next;
                if (node.next == null) return newHead;
            }
        }
        if (node.next != null) node = node.next;
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

//Input:  1->2->6->3->4->5->6, val = 6
const list2 = 
{
    val: 1,
    next: 
    {
        val: 2,                                            
        next: 
        {
            val: 6,
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

const list6 = 
{
    val: 1,
    next: 
    {
        val: 1,
        next: null
    } 
}

//let list = list2;
//let num  = 6;
//let list = list6;
//let num  = 1;
let list = list5;
let num  = 2;


//console.log(JSON.stringify(list, null, 4));
//console.log();
console.log(JSON.stringify(removeElements(list, num), null, 4));