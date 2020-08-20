/*
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) 
{
//okay, this one is easy
//go through the array
//use the values in the first array as indexes for a second array.
//put a value of -1 in every index that is represented in the first array
//indixes without a -1 are your missing numbers
    
    let map = [];

    for (let i = 0; i < nums.length; i++)
        map[nums[i]] = -1;
    
    nums = [];

    for (let i = 0; i < map.length; i++)
        if (map[i] != -1) nums.push(map[i]);

    return nums;
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
    },
    {
        nums: [3, 2, 1],
        val:  1
    },
    {
        nums: [1, 2],
        val:  2
    },
    {
        nums: [2, 2, 3, 1],
        val:  1
    },
    {
        nums: [-1, -2],
        val:  2
    },
    {
        nums: [-2, -2, -3, -1, -4, -5, 0],
        val:  1
    }
]


for (let x in data)
{
    console.log(`${data[x].nums}`);

    //sortArrayByParity(data[x].nums);

    console.log(findDisappearedNumbers(data[x].nums));

    //answer == data[x].val ? console.log(`pass (${answer})`) : console.log(`fail ${answer}`);
}