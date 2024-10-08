// recursion


function countDown(n) {
    console.log(n);

    n--
    if (n > 0) {
        countDown(n)
    }


}

// const result = countDown(10)

function sumOfNumber(n) {
    if (n < 0) return 0

    return n + sumOfNumber(n - 1)
}

const result2 = sumOfNumber(10)
console.log(result2);
