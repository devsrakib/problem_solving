function findOddNumber(arr) {//n
    if (arr.length === 0) return 0
    let sumOddNumber = 0 //n
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sumOddNumber += arr[i]
        }
    }
    if (sumOddNumber % 4 === 0) {
        console.log('this is a leap year');
    } else {
        console.log(`${sumOddNumber} is not a leap year`);

    }
    return sumOddNumber
}

// time complexity bigO(n*n) = n^2 

// console.log(findOddNumber([2001, 25, 4234]));


function findOddNumber2(arr) {//n
    // helper function
    function helper(input) {
        if (input.length === 0) return 0
        let sumOddNumber = 0 //n


        console.log(input);


        // if (sumOddNumber % 4 === 0) {
        //     console.log('this is a leap year');
        // } else {
        //     console.log(`${sumOddNumber} is not a leap year`);

        // }
        // return sumOddNumber
    }


    helper(arr)
}

const odNumber = findOddNumber2([3, 9, 8, 7, 4, 8, 2, 3, 7, 5])
console.log(odNumber);
