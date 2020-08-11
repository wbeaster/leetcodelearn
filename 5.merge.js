/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

    The number of elements initialized in nums1 and nums2 are m and n respectively.
    You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.

Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]

 

Constraints:

    -10^9 <= nums1[i], nums2[i] <= 10^9
    nums1.length == m + n
    nums2.length == n

*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) 
{
    var shiftRightOne = function(arr, startIndex)
    {
        //this starts at the second to last one and then shifts everything right
        //startIndex is the index where you want to start shifting right from
        //the item at startIndex will be moved one to the right too
        for (let i = arr.length-1; i >= startIndex; i--)
        {
                arr[i] = arr[i-1];
        }
    }

    nums3 = new Array(m+n);

    let iNums1 = 0;
    let iNums2 = 0;
    let iNums3 = 0;

    while (iNums1 < m && iNums2 < n)
    {
        if (nums1[iNums1] < nums2[iNums2])
        {
            nums3[iNums3] = nums1[iNums1];
            iNums3++;
            iNums1++;
        }
        else if (nums1[iNums1] == nums2[iNums2])
        {
            nums3[iNums3] = nums1[iNums1];
            iNums3++;
            nums3[iNums3] = nums2[iNums2];
            iNums3++;
            iNums1++;
            iNums2++;
        }
        else if (nums1[iNums1] > nums2[iNums2])
        {
            nums3[iNums3] = nums2[iNums2];
            iNums3++;
            iNums2++;            
        }
    }

    if (iNums1 == m + n) return nums3;

    if (iNums1 < m)
    {
        for (iNums1; iNums1 < m; iNums1++)
        {
            nums3[iNums3] = nums1[iNums1];
            iNums3++;
        }
    }

    if (iNums2 < n)
    {
        for (iNums2; iNums2 < n; iNums2++)
        {
            nums3[iNums3] = nums2[iNums2];
            iNums3++;
        }
    }

    return nums3;

};

//TODO: Reread the spec and make your **thorough** test data
//TODO: Does our number array handle +- 10^9

let nums1 = [10,11, 1000000000, 0, 0, 0];
let m = 3;
let nums2 = [1, 2, 3, 11000000];
let n = 4;

answer = merge(nums1, m, nums2, n);

console.log(answer);