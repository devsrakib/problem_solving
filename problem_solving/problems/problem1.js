let randomVariable = [-8, 39, 837, 34, 'error', 9, 8, 2, 3, 7, 4]

function getHigherAndLower(arr) {


    // declare a higher variable
    let highest = 0;
    // declare a lower variable
    let lowest = 0;
    // get string
    let string = []

    // iterate the array
    for (let i = 0; i < arr.length; i++) {
        // check is there any error
        if (typeof arr[i] !== 'number') {
            string.push(arr[i])
            continue
        }

        // get highest number
        if (highest < arr[i]) {
            highest = arr[i]
        }

        // get lowest number
        if (lowest > arr[i]) {
            lowest = arr[i]
        }
    }

    // return lo

}

getHigherAndLower(randomVariable)