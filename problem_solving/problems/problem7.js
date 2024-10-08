// binary search

function search(arr, val) {
    if (arr.length === 0) return
    const sortedArr = arr.sort((a, b) => a - b)

    let start = 0;
    let end = sortedArr.length - 1

    while (start <= end) {
        let middle = Math.round((start + end) / 2);
        if (arr[middle] === val) return middle
        if (val > arr[middle]) {
            start = middle + 1
        } else if (val < arr[middle]) {
            end = middle - 1
        }

    }
    return 'result not found'
}

const result = search([9, 4, 8, 32, 84, 7, 3, 2, 8, 7, 6, 42, 38, 75], 9)
console.log(result);

