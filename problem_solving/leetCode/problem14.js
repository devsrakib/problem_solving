var maxArea = function (heights) {
    let left = 0;
    let right = heights.length - 1;
    let maxWater = 0;

    while (left < right) {
        let height = Math.min(heights[left], heights[right]);
        let width = right - left;
        let currentWater = height * width;
        maxWater = Math.max(maxWater, currentWater);

        // Move the pointer that has the smaller height
        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};
