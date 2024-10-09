function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) * min;


}
// const result = randomNumber(1, 6)




// sorting alphabetically

function sortingFunc(arr1, arr2) {

    const sortedArrays = arr1.sort() + " " + arr2.sort((a, b) => a - b)
    return sortedArrays

}

const result1 = sortingFunc(['rakib', 'aiman', 'jaker', 'sharif', 'muntasir'], [8, 4, 3, 5, 9, 8, 2, 3, 7, 5, 9, 8, 3, 4, 7, 6, 3, 8, 9, 4, 6, 7, 1, 2, 4, 3, 2])
// console.log(result1);



// // get vowel from sentence
// const vowel = ['a', 'e', 'i', 'o', 'u']
// function getVowel(s) {
//     const sentenceToArray = s.slice();
//     let count = 0
//     for (let i = 0; i < sentenceToArray.length; i++) {
//         if (vowel.includes(sentenceToArray[i].toLowerCase())) {
//             count = count + 1
//         }

//     }
//     return count
// }
// const result2 = getVowel('i love bangladesh')
// console.log(result2);


// get vowel from sentence
const vowel = ['a', 'e', 'i', 'o', 'u']
function getVowel(s) {
    const sentenceToArray = Array.from(s);
    let count = 0
    sentenceToArray.forEach((val) => {
        if (vowel.includes(val)) {
            count++
        }
    })
    return count
}
const result2 = getVowel('i love bangladesh')
// console.log(result2);



// get duplicate value

function getDuplicate(arr) {
    // ======= way one =========
    // return arr.filter((val, index, array) => {
    //     return array.indexOf(val) !== index
    // })

    let duplicate = []

    arr.filter((val) => {
        if (!duplicate.includes(val)) {
            duplicate.push(val)
        }
    })

    return duplicate.sort((a, b) => a - b)
}

const result3 = getDuplicate([2, 3, 4, 2, 9, 3, 8, 5, 0, 9, 4, 8, 2, 7])
console.log(result3)