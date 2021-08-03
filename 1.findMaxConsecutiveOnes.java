class Solution 
{
    public int findMaxConsecutiveOnes(int[] nums) 
    {
        int largest = 0;
        int current = 0;
        
        if (nums[0] == 1)
        {
            current++;
            largest = current;
        }
        
        for (int i = 1; i < nums.length; i++)
        {
            if (nums[i] == 1)
            {
                current++;
                if (current > largest)
                    largest = current;
            }
            else
            {
                current = 0;
            }
        }
        return largest;
    }
}