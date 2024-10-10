// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const TowSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        let remaining = target - nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (remaining === nums[j]) {
                return [i, j];
            }
        }
    }
    return false;
};

// time complexity = O(n^2)
// space complexity = O(1)
console.log(TowSum([2, 7, 11, 15], 9));