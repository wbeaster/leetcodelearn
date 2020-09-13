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
    if (root.left != null && root.right != null)
        return [root.val].push(preorderTraversal(root.left)).push(preorderTraversal(root.right));
    if (root.left != null && root.right == null)
        return [root.val].push(preorderTraversal(root.left));
    if (root.left == null && root.right != null)
        return [root.val].push(preorderTraversal(root.right));
    if (root.left == null && root.right == null)
        return root.val;
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

let tree = tree0;

console.log(JSON.stringify(tree, null, 4));

console.log(preorderTraversal(tree));