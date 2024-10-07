
function sum(arr) {
    let number = 0;

    for (let i = 0; i < arr.length; i++) {
        number += arr[i]
    }
    return number
}

console.log(sum([3, 3, 3]));
