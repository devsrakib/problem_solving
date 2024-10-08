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

// BigON => n*n = n2 time complexity
// BigON => 1 space complexity

// call the function with two array of number
// const result = same([2, 3, 6], [4, 39, 36])
// console.log(result);




function same2(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }

    let sequenceCounter1 = {};
    let sequenceCounter2 = {};

    for (let val of arr1) {
        sequenceCounter1[val] = sequenceCounter1[val]++ || 1
    }

    for (let val of arr2) {
        sequenceCounter2[val] = sequenceCounter2[val]++ || 1
    }

    for (let key in sequenceCounter1) {
        if (!(key ** 2) in sequenceCounter2) {
            return false
        }

        if (sequenceCounter2[key ** 2] !== sequenceCounter1[key]) {
            return false
        }
    }
    return true



}

// BigON => n = n time complexity
// BigON => n = n space complexity

const result2 = same2([2, 4, 6], [4, 9, 36])
console.log(result2);
