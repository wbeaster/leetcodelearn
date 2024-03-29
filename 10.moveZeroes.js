/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Note:

    You must do this in-place without making a copy of the array.
    Minimize the total number of operations.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) 
{
    if (nums.length == 1) return;
    
    let i = 0;
    let j = 1;
    let numDragged = 0;

    //in short, bubble each zero to the end of the array, shortening the length we drag to
    //as we fill the end with zeros
    
    do
    {
        if (nums[i] == 0)
        {
            //move it to the end
            for (j = i; j < nums.length-1-numDragged; j++)
            {
                nums[j] = nums[j+1];
                nums[j+1] = 0;
            }
            numDragged++;            
        }
        else
        {
            i++;
        }
    }
    while (i + numDragged  < nums.length)
    
};


let data = [
    {
        nums: [0,1,0,3,12],
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
    console.log(`${data[x].nums} # ${data[x].val}`);

    moveZeroes(data[x].nums);

    console.log(data[x].nums);

    //answer == data[x].val ? console.log(`pass (${answer})`) : console.log(`fail ${answer}`);
}