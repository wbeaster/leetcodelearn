/*
Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:

Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.

Note:

    The input array will only contain 0 and 1.
    The length of input array is a positive integer and will not exceed 10,000
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) 
{
    let maxConsecutiveOnes = 0;
    let currentConsecutiveOnes = 0;

    for (let i = 0; i < nums.length; i++)
    {
        //console.log(i);
        switch (nums[i])
        {
            case 0:
                currentConsecutiveOnes = 0;
                break;
            case 1:
                currentConsecutiveOnes++;
                if (currentConsecutiveOnes > maxConsecutiveOnes)
                    maxConsecutiveOnes = currentConsecutiveOnes;
                break;
        }
    }
    return maxConsecutiveOnes;    
};

let data = [[1,1,0,1,1,1], [1,1,1,1,1,1,1]];
let answer = [3,7];

for (let i = 0; i < answer.length; i++)
    console.log(findMaxConsecutiveOnes(data[i]) == answer[i]);