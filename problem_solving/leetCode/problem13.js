function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] + arr[i] === target) {
                return [i, j]
            }
        }
    }
}

const result = twoSum([2, 3, 4], 6);
console.log(result);
