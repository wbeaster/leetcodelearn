/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.

Follow up: Recursive solution is trivial, could you do it iteratively?

Example 1:

Input: root = [1,null,2,3]
Output: [1,3,2]

Example 2:

Input: root = []
Output: []

Example 3:

Input: root = [1]
Output: [1]

Example 4:

Input: root = [1,2]
Output: [2,1]

Example 5:

Input: root = [1,null,2]
Output: [1,2]

Constraints:

    The number of nodes in the tree is in the range [0, 100].
    -100 <= Node.val <= 100


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
var inorderTraversal = function(root) 
{
    let answer = [];
    let stack = [];

    stack.push(root);

    while(stack)
    {
        let node = stack.pop;
        answer.push(node.val);
        if (node.right != null) stack.push(node.right);
        if (node.left != null) stack.push(node.left);
    }

    return answer;

    
};






const tree0 = 
{
    val: 'F',
    left: 
    {
        val: 'B',
        left:
        {
            val: 'A',
            left: null,
            right: null
        },
        right:
        {
            val: 'D',
            left:
            {
                val: 'C',
                left: null,
                right: null
            },
            right:
            {
                val: 'E',
                left: null,
                right: null
            }
        }
    },
    right:
    {
        val: 'G',
        left: null,
        right:
        {
            val: 'I',
            left: 
            {
                val: 'H',
                left: null,
                right: null
            },
            right: null
        },
    }
}

const tree1 = 
{
    val: 1,
    left: null,
    right:
    {
        val: 2,
        left:
        {
            val: 3,
            left: null,
            right: null
        },
        right: null
    }
}

const tree2 = 
{
    val: 1,
    left:
    {
        val: 2,
        left: null,
        right: null
    },
    right:
    {
        val: 3,
        left: null,
        right: null
    }
}

const tree3 = 
{
    val: null,
    left: null,
    right: null
}

const tree4 = 
{
    val: 1,
    left: null,
    right: null
}

const treeleft = 
{
    val: 'F',
    left: 
    {
        val: 'B',
        left:
        {
            val: 'A',
            left: 
            {
                val: 'Z',
                left: null,
                right: null
            }
        }
    }
}

const treeright = 
{
    val: 'F',
    left: null,
    right:
    {
        val: 'G',
        left: null,
        right:
        {
            val: 'I',
            left: null,
            right: 
            {
                val: 'H',
                left: null,
                right: null
            },
        },
    }
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

console.log(inorderTraversal(tree));