/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0){
        return false
    }
    let reverse = parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x)
    if (reverse === x) {
        return true
    }
    return false
};