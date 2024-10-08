function findOddNumber(arr) {
    //n
    if (arr.length === 0) return 0;
    let sumOddNumber = 0; //n
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sumOddNumber += arr[i];
        }
    }
    if (sumOddNumber % 4 === 0) {
        console.log("this is a leap year");
    } else {
        console.log(`${sumOddNumber} is not a leap year`);
    }
    return sumOddNumber;
}

// time complexity bigO(n*n) = n^2

// console.log(findOddNumber([2001, 25, 4234]));

function findOddNumber2(arr) {
    //n
    let oddNumber = []; //n
    // helper function
    function helper(input) {
        if (input.length === 0) return 0;

        if (input[0] % 2 !== 0) {
            oddNumber.push(input[0])
        }
        helper(input.slice(1))
    }
    helper(arr)
    return oddNumber;
}

const odNumber = findOddNumber2([2001, 25, 6, 2]);
console.log(odNumber);
