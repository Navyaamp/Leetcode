/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let result = nums.filter(num => num !== val);

    for (let i = 0; i < result.length; i++) {
        nums[i] = result[i];
    }

    return result.length;
};