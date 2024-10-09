const sentence = 'ami muhammad rakibul islam shahin, amar baba amake shahin bole dake, amar ma o amake shahin bole dake';


const matches = sentence.match(/shahin/gi);
const occurances = matches ? matches.length : 0
const position = sentence.search(/shahin/i);
// console.log(position);

// linear search
const search = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i
        }
    }
}

const result = search(['a', 'c', 'd', 'e', 'f', 'g'], 'c');
// console.log(result);



// get the largest string from an array
const getString = (arr) => {
    let string = ''
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > string.length) {
            string = arr[i]
        }
    }
    return {
        string: string,
        index: arr.indexOf(string)
    };

}

const result1 = getString(['rakib', 'sakib', 'muntasir', 'forTesting'])
console.log(result1);




























