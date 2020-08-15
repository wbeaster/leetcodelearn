/*
Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

 

Example 1:

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]

 

Constraints:

    1 <= arr.length <= 10^4
    1 <= arr[i] <= 10^5
*/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) 
{
    for (let i = 0; i < arr.length; i++)
    {
        let newMax = arr[i+1];
        for (let j = i+1; j < arr.length; j++)
        {
            if (arr[j] > newMax)
                newMax = arr[j];            
        }
        arr[i] = newMax;
    }
    arr[arr.length-1] = -1;
    return arr;
};

let data = [
    {
        nums: [17,18,5,4,6,1],
        val: [18,6,6,6,1,-1]
    },
    {
        nums: [0,1,2,2,3,0,4,2],
        val:  [4,4,4,4,4,4,2,-1]
    },
    {    
        nums: [3,5,5],
        val:  [5,5,-1]
    },
    {
        nums: [0],
        val:  [-1]
    },
    {
        nums: [1],
        val:  [-1]
    },
    {
        nums: [0,3,2,1],
        val:  [3,2,1,-1]
    },
    {
        nums: [1, 2, 3, 4, 5, 0, 1, 2, 3],
        val:  [5, 5, 5, 5, 3, 3, 3, 3, -1]
    },
    {
        nums: [5, 4, 3, 2, 1],
        val:  [4, 3, 2, 1, -1]
    },
    {
        nums: [1, 2, 3, 2, 1],
        val:  [3, 3, 2, 1, -1]
    },
    {
        nums: [1, 2, 3, 3, 2, 1],
        val:  [3, 3, 3, 2, 1, -1]
    },

    {
        nums: [1, 2, 3, 2, 1, 2, 1, 2, 3],
        val:  [3, 3, 3, 3, 3, 3, 3, 3, -1]
    },
    {
        nums: [1, 2, 3, 3, 2, 1],
        val:  [3, 3, 3, 2, 1, -1]
    },
    {
        nums: [2,2,2,2,2,2,2,2],
        val:  [2,2,2,2,2,2,2,-1]
    },
    {
        nums: [2,1,2,2,3,0,4,2],
        val:  [4,4,4,4,4,4,2,-1]
    }
]

for (let x in data)
{
    console.log(`${data[x].nums} # ${data[x].val}`);

    answer = replaceElements(data[x].nums);

    answer == data[x].val ? console.log(`pass (${answer})`) : console.log(`fail ${answer}`);
}