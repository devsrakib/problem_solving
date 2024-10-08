// create a boiler plate
function charCount(str) {
    // declare a empty object
    let charObject = {}
    // remove empty string or boolean value
    // iterate str
    for (let i = 0; i < str.length; i++) {
        // convert lowercase and ignore spaces
        const char = str[i].toLowerCase().trim()
        // check string using regular expression
        if (/[a-z]/.test(charObject[char])) {
            // increase value 
            charObject[char]++
        } else {
            charObject[char] = 1
        }
    }
    // return object
    return charObject;
}

// call function with string
// const result = charCount('rakibul islam');
// const result2 = charCount('md nasmus sakib sumon! 2')
// // log output
// console.log(result);
// console.log(result2);




// another way for count character
function charCount(str) {
    // Declare an empty object
    const charObject = {};

    // Iterate over the string using 'for...of'
    for (const char of str.toLowerCase()) {
        // Ignore spaces or non-alphabetic characters
        if (/[a-z]/.test(char.trim())) {
            // Use optional chaining to simplify counting logic
            charObject[char] = (charObject[char] ?? 0) + 1;
        }
    }

    // Return the character count object
    return charObject;
}


// const result = charCount('rakibul islam');
// const result2 = charCount('md nasmus sakib sumon!!')
// // log output
// console.log(result);
// console.log(result2);




// check array
function charCount(arr) {
    // declare a empty object
    let charObject = {}
    // remove empty string or boolean value
    // iterate str
    for (let i = 0; i < arr.length; i++) {
        // convert lowercase and ignore spaces
        const char = arr[i].trim().toLowerCase()
        // check string using regular expression
        if (charObject[char]) {
            // increase value 
            charObject[char]++
        } else {
            charObject[char] = 1
        }
    }

    // return object
    return charObject;
}

// call function with string
const result = charCount(['rakibul', 'islam', 'Rakibul ', 'islam', 'muntasir', 'muntasir']);
// const result2 = charCount('md nasmus sakib sumon! 2')
// log output
console.log(result);
// console.log(result2);