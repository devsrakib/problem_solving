function same(arr1, arr2) {
    // check length and return false
    if (arr1.length !== arr2.length) {
        return false
    }

    // iterate arr1
    for (let i = 0; i < arr1.length; i++) {
        // 
        let currentIndex = arr2.indexOf(arr1[i] ** 2)
        if (currentIndex === -1) {
            return false
        }
        arr2.splice(currentIndex, 1);
    }
    return true
}

// call the function with two array of number
const result = same([2, 3, 6], [4, 39, 36])
console.log(result);
