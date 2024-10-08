// recursion

function countDown(n) {
    console.log(n);

    n--;
    if (n > 0) {
        countDown(n);
    }
}

// const result = countDown(10)

function sumOfNumber(n) {
    if (n < 0) return 0;

    return n + sumOfNumber(n - 1);
}

const result2 = sumOfNumber(10);
// console.log(result2);

// sum of array

function sumOfArray1(arr) {
    if (arr.length === 0) return 0;

    let rest = arr.slice(1);
    return arr[0] + sumOfArray1(rest);
}

// time com BigOn  (n*n) = n^2
// space com BigOn (n) = n

// complexity check
function sumOfArray2(arr) {
    return helperFun(arr, 0);
}

function helperFun(arr, index) {
    if (arr?.length === index) return 0;
    return arr[index] + helperFun(arr, index + 1);
}

const input = new Array(9000).fill(1);

const start1 = Date.now();
const result = sumOfArray1(input);
const end1 = Date.now();
console.log(result);
console.log(`time ${end1 - start1} ms`);

const start2 = Date.now();
const result1 = sumOfArray2(input);
console.log(result1);
const end2 = Date.now();

console.log(`time ${end2 - start2} ms`);
