class Solution(object):
    def runningSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        output = []
        total = 0
        for x in nums:
            total += x;
            output.append(total)
            
        return output