const uniquename = (arr) => {

    let name = [] // space complexity is: n
    for (let i = 0; i < arr.length; i++) { // the time complexity is: n2
        if (!name.includes(arr[i])) {
            name.push(arr[i])
        }
    }

    return name;
}

console.log(uniquename(['sahin', 'sumon', 'muntasir', 'sahin', 'muntasir']));

