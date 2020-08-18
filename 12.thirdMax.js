/*
Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:

Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.

Example 2:

Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.

Example 3:

Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) 
{
    
};

let data = [
    {
        nums: [0,3,1,2,4,0],
        val: [1,3,12,0,0]
    },
    {
        nums: [0,0,2,2,3,0,4,2],
        val:  [2,2,3,4,2,0,0,0]
    },
    {    
        nums: [3,5,5],
        val:  [3,5,5]
    },
    {
        nums: [0],
        val:  [0]
    },
    {
        nums: [1],
        val:  [1]
    },
    {
        nums: [0,3,2,1],
        val:  [3,2,1,0]
    },
    {
        nums: [1, 2, 3, 4, 5, 0, 1, 2, 3],
        val:  [1, 2, 3, 4, 5, 1, 2, 3, 0]
    },
    {
        nums: [5, 4, 3, 2, 1],
        val:  [5, 4, 3, 2, 1]
    },
    {
        nums: [1, 2, 3, 2, 1],
        val:  [1, 2, 3, 2, 1]
    },
    {
        nums: [1, 2, 3, 3, 2, 1],
        val:  [1, 2, 3, 3, 2, 1]
    },

    {
        nums: [1, 2, 3, 2, 1, 2, 1, 2, 3],
        val:  [1, 2, 3, 2, 1, 2, 1, 2, 3]
    },
    {
        nums: [1, 2, 3, 3, 2, 1],
        val:  [1, 2, 3, 3, 2, 1]
    },
    {
        nums: [2,2,2,2,2,2,2,2],
        val:  [2,2,2,2,2,2,2,2]
    },
    {
        nums: [2,1,2,2,3,0,4,2],
        val:  [2,1,2,2,3,4,2,0]
    },
    {
        nums: [0,0,0,2,1,2,2,3,0,4,2],
        val:  [2,1,2,2,3,4,2,0,0,0,0]
    }
]


for (let x in data)
{
    console.log(`${data[x].nums}`);

    sortArrayByParity(data[x].nums);

    //ZERO IS EVEN!!!
    console.log(data[x].nums);

    //answer == data[x].val ? console.log(`pass (${answer})`) : console.log(`fail ${answer}`);
}