/*

You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

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

class Node
{
    constructor(val)
    {
        this.val = val;
        this.next = null;
    }
}

 var addTwoNumbers = function(l1, l2) 
{
    
    function listFlip(node)
    {
        let number = new String;
        while(node)
        {
            number = node.val.toString() + number;
            node = node.next;
        }
        return number;
    }

    function numToLinkedList(num)
    {
        let head = new Node(-1);
        let node = head;
        let str = num.toString();

        for (let i = 0; i < str.length; i++)
        {
            node.val = str[i];
            if (i + 1 == str.length) 
                node.next = null
            else
            {
                node.next = new Node(-1);
                node = node.next;
            }
        }

        return head;
    }
    
    let step1 = Number(listFlip(l1)) + Number(listFlip(l2));
    let step2 = reverse(step1.toString);

    return numToLinkedList(step1);
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

let l1 = list8;
let l2 = list9;
//let num  = 6;
//let list = list6;
//let num  = 1;
//let list = list5;
//let num  = 2;


console.log(JSON.stringify(l1, null, 4));
console.log(JSON.stringify(l2, null, 4));
//console.log();
//test NULL list and single item list
console.log(JSON.stringify(addTwoNumbers(l1, l2), null, 4));