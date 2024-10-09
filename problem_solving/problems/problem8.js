// bubble sort selection sort insertion sort

// bubble sort
function bubbleSort(arr) {
    if (arr.length === 0) return;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

const result = bubbleSort([39, 4, 87, 2, 3, 8, 7, 5, -6, 45, 86]);
console.log(result);

