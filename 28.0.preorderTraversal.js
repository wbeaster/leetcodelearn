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
    if (root == null) return [];
    if (root.left != null && root.right != null)
        return [Number(root.val)].concat(preorderTraversal(root.left)).concat(preorderTraversal(root.right));
    if (root.left != null && root.right == null)
        return [Number(root.val)].concat(preorderTraversal(root.left));
    if (root.left == null && root.right != null)
        return [Number(root.val)].concat(preorderTraversal(root.right));
    if (root.left == null && root.right == null)
        return Number(root.val);
/*
    if (root.left != null && root.right != null)
        return [root.val, preorderTraversal(root.left), preorderTraversal(root.right)];
    if (root.left != null && root.right == null)
        return [root.val, preorderTraversal(root.left)];
    if (root.left == null && root.right != null)
        return [root.val, preorderTraversal(root.right)];
    if (root.left == null && root.right == null)
        return root.val;
*/
/*
    if (root.left != null)
        return [root.val, preorderTraversal(root.left)];
    else if (root.right != null)
        return [root.val, preorderTraversal(root.right)];
    else
        return root.val;
*/
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

console.log(preorderTraversal(tree));