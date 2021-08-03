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
 var isPalindrome = function(head) 
{
    if (head == null) return true;
    if (head.next == null) return true;
    
    let length = 0;
    let node = head;

    while (node)
    {
        length++;
        node = node.next;
    }

    let even = false;
    if (length % 2 == 0)
        even = true;

    node = head;

    let front = new Array();

    for (let i = 0; i < Math.floor(length / 2); i++)
    {
        front.push(node.val)
        node = node.next;
    }

    let back = node.next;
    if (even) 
        back = node;

    while (back)
        if (front.pop() == back.val)
        {
            back = back.next
        }
        else
        {
            return false;
        }

    return true;
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
console.log(isPalindrome(list));