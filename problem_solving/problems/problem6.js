// linear search

function linearSearch(arr, val) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === (val)) return `the index number is ${i}`
    }
    return 'result not found'
}

const result = linearSearch([2, 0, 9, 4, 5, 8, 2], 2)
console.log(result);
