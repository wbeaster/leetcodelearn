/*
Students are asked to stand in non-decreasing order of heights for an annual photo.

Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.

Notice that when a group of students is selected they can reorder in any possible way between themselves and the non selected students remain on their seats.

Example 1:

Input: heights = [1,1,4,2,1,3]
Output: 3
Explanation: 
Current array : [1,1,4,2,1,3]
Target array  : [1,1,1,2,3,4]
On index 2 (0-based) we have 4 vs 1 so we have to move this student.
On index 4 (0-based) we have 1 vs 3 so we have to move this student.
On index 5 (0-based) we have 3 vs 4 so we have to move this student.

Example 2:

Input: heights = [5,1,2,3,4]
Output: 5

Example 3:

Input: heights = [1,2,3,4,5]
Output: 0

Constraints:

    1 <= heights.length <= 100
    1 <= heights[i] <= 100

*/

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) 
{
    unsorted = heights.slice();
    heights.sort();
    
    console.log(unsorted);
    console.log(heights);

    let count = 0;

    for (let i = 0; i < heights.length; i++)
    {
        if (unsorted[i] != heights[i]) count++;
    }
    
    return count;
    
};

let data = [
    {
        nums: [4,3,2,7,8,2,3,1],
        val: [5,6]
    },
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
        //this case seems to fail for some reason. I think I'm misunderstand the spec. The proper answer leetcode says is 22
        nums: [10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7],
        val: 22
    },
    {
        nums: [2, 2, 3, 1],
        val:  1
    },
    {
        nums: [1, 1],
        val:  [2]
    }
]


for (let x in data)
{
    console.log(`${data[x].nums}`);

    //sortArrayByParity(data[x].nums);

    //this will not pass, see comment in test data
    console.log(xxheightChecker(data[x].nums));

    //answer == data[x].val ? console.log(`pass (${answer})`) : console.log(`fail ${answer}`);
}