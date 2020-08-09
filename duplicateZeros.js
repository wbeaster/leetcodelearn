/*
Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written.

Do the above modifications to the input array in place, do not return anything from your function.

 

Example 1:

Input: [1,0,2,3,0,4,5,0]
Output: null
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

Example 2:

Input: [1,2,3]
Output: null
Explanation: After calling your function, the input array is modified to: [1,2,3]

 

Note:

    1 <= arr.length <= 10000
    0 <= arr[i] <= 9
*/

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) 
{
    //if not modified than return null per spec
    let fModified = false;

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

    if (arr.length == 1)
        return null;
    else
    {
        //use -1 as a marker to ensure that a 0 is doubled again (infinetly)
        for (i = 0; i < arr.length-1; i++)
        {
            if (arr[i] == 0)
            {
                fModified = true;
                shiftRightOne(arr, i+1)
                arr[i+1] = -1;
            }
        }

        if (!fModified) return null;
        
        for (i = 0; i < arr.length; i++)
        {
            if (arr[i] == -1) arr[i] = 0;
        }
        return arr;
    }
};

let data = [1,0,2,3,0,4,5,0];

console.log(data);

answer = duplicateZeros(data)

console.log(answer);

//console.log(duplicateZeros(data));