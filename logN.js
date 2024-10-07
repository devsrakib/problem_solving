// function LogN(n) {
//     while (n > 1) {
//         n /= 2
//         console.log(n);
//     }
//     console.log('Done');

// }


function anotherLogN(n) {

    if (n <= 1) {
        console.log(n);
        return
    }
    anotherLogN(n / 2)
}


anotherLogN(8)