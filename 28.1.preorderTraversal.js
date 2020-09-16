/*
Given a binary tree, return the preorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,2,3]

Follow up: Recursive solution is trivial, could you do it iteratively?
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) 
{
    //Try to come back to this and rewrite the soltion as your own
    let result = []

    const stack = []
    
    stack.push(root)

    //console.log(JSON.stringify(stack, null, 4));

    while(stack.length) 
    {
        const node = stack.pop()

        if(node != null) 
        {
            result.push(node.val)
			// to avoid stacking nulls by checking
            if (node.right) stack.push(node.right) // first in last out
            if (node.left) stack.push(node.left)
        }

    }

    return result;
}


const treenull = null;

const treenum = 
{
    val: '6',
    left: 
    {
        val: '2',
        left:
        {
            val: '1',
            left: null,
            right: null
        },
        right:
        {
            val: '4',
            left:
            {
                val: '3',
                left: null,
                right: null
            },
            right:
            {
                val: '5',
                left: null,
                right: null
            }
        }
    },
    right:
    {
        val: '7',
        left: null,
        right:
        {
            val: '9',
            left: 
            {
                val: '8',
                left: null,
                right: null
            },
            right: null
        },
    }
}

let tree = treenum;

console.log(JSON.stringify(tree, null, 4));

console.log(preorderTraversal(tree));