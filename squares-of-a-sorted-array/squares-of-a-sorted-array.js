/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    var nums = squareNums(nums)
    nums = sortArray(nums)
    return nums
};

var squareNums = function(nums) {
    for (let x = 0; x < nums.length; x++) {
        var newNum = Math.pow(nums[x], 2)
        nums[x] = newNum
    }
    return nums
}

var sortArray = function(nums) {
    nums.sort(function(a, b) {
        return a - b;
    });
    return nums
}