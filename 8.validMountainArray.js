/*
Given an array A of integers, return true if and only if it is a valid mountain array.

Recall that A is a mountain array if and only if:

    A.length >= 3
    There exists some i with 0 < i < A.length - 1 such that:
        A[0] < A[1] < ... A[i-1] < A[i]
        A[i] > A[i+1] > ... > A[A.length - 1]


 

Example 1:

Input: [2,1]
Output: false

Example 2:

Input: [3,5,5]
Output: false

Example 3:

Input: [0,3,2,1]
Output: true

 

Note:

    0 <= A.length <= 10000
    0 <= A[i] <= 10000 

 */

 /**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) 
{
    if (A.length < 3) return false;
    if (A.length > 10000) return false;

    let increased = false;
    let decreased = false;

    let i = 0, j = 1;
   
    while (j < A.length)
    {
        if (A[i] >= A[j])
            break;
        
        i++;
        j++;
        increased = true;
    }

    if (!increased) return false;

    while (j < A.length)
    {
        if (A[i] <= A[j])
            return false;

        i++;
        j++;
        decreased = true;

    }
    return (increased && decreased);
};

let data = [
    {
        nums: [2,1],
        val: false
    },
    {
        nums: [0,1,2,2,3,0,4,2],
        val: false
    },
    {    
        nums: [3,5,5],
        val: false
    },
    {
        nums: [0],
        val: false
    },
    {
        nums: [1],
        val: false
    },
    {
        nums: [0,3,2,1],
        val: true
    },
    {
        nums: [1, 2, 3, 4, 5, 0, 1, 2, 3],
        val: false
    },
    {
        nums: [5, 4, 3, 2, 1],
        val: false
    },
    {
        nums: [1, 2, 3, 2, 1],
        val: true
    },
    {
        nums: [1, 2, 3, 3, 2, 1],
        val: false
    },

    {
        nums: [1, 2, 3, 2, 1, 2, 1, 2, 3],
        val: false
    },
    {
        nums: [1, 2, 3, 3, 2, 1],
        val: false
    },
    {
        nums: [2,2,2,2,2,2,2,2],
        val: false
    },
    {
        nums: [2,1,2,2,3,0,4,2],
        val: false
    }
]

for (let x in data)
{
    console.log(`${data[x].nums} # ${data[x].val} ? ${validMountainArray(data[x].nums)}`);

    validMountainArray(data[x].nums) == data[x].val ? console.log('pass') : console.log('fail');

    
}