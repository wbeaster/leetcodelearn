/*
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

 

Example 1:

Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

 

Note:

    1 <= A.length <= 5000
    0 <= A[i] <= 5000

*/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(nums) 
{
    if (nums.length == 1) return;
    
    let i = 0;
    let j = 1;
    let numDragged = 0;

    //in short, bubble each odd element to the end of the array, shortening the length we drag to
    //as we fill the end with odd elements
    
    do
    {
        if (nums[i] % 2 != 0)
        {
            //move it to the end
            for (j = i; j < nums.length-1-numDragged; j++)
            {
                let t = nums[j]
                nums[j] = nums[j+1];
                nums[j+1] = t;
            }
            numDragged++;            
        }
        else
        {
            i++;
        }
    }
    while (i + numDragged  < nums.length)
    
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