// Time Complexity: O(n^2)
// Time Complexity: O(1)

var maximumDifference = function(nums) {
    let diffVal = -1;
    let minEl = nums[0];
        for(let j = 1; j <= nums.length - 1; j++) {
            if(minEl < nums[j]) {
                diffVal = Math.max(diffVal, nums[j] - minEl);
            }
            else {
                minEl = nums[j]
            }
    }

    return diffVal;
};

console.log(maximumDifference([1,5,2,10]))

