/*
Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

More formally check if there exists two indices i and j such that :

    i != j
    0 <= i, j < arr.length
    arr[i] == 2 * arr[j]

 

Example 1:

Input: arr = [10,2,5,3]
Output: true
Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.

Example 2:

Input: arr = [7,1,14,11]
Output: true
Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.

Example 3:

Input: arr = [3,1,7,11]
Output: false
Explanation: In this case does not exist N and M, such that N = 2 * M.

 

Constraints:

    2 <= arr.length <= 500
    -10^3 <= arr[i] <= 10^3

*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) 
{
    const MIN = -1 * 10**3;
    const MAX = 10**3;

    if (arr.length == 2)
        if (arr[0] == 0 && arr[1] == 0) return true;
    
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] * 2 < MAX && arr[i] != 0)
        {
            for (let j = 0; j < arr.length; j++)
                if (arr[j] == arr[i] * 2) return true;
        }
    }
    return false;
};

let data = [
    {
        nums: [0, 0]
    },
    {
        nums: [-2,0,10,-19,4,6,-8]
    },
    {
        nums: [10,2,5,3]
    },
    {
        nums: [7,1,14,11]
    },
    {    
        nums: [3,1,7,11]
    },
    {
        nums: [-2,0,10,-19,4,6,-8]
    },
    {
        nums: [1, 2, 3]
    },
    {
        nums: [1, 2, 3]
    },
    {
        nums: [0, 0]
    },
    {
        nums: [1, 2, 3]
    },
    {
        nums: [2,2,2,2,2,2,2,2]
    },
    {
        nums: [2,1,2,2,3,0,4,2]
    }
]

for (let x in data)
{
    console.log(`${data[x].nums}`);
    console.log(checkIfExist(data[x].nums));
}