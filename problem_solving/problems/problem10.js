const sentence = 'ami muhammad rakibul islam shahin, amar baba amake shahin bole dake, amar ma o amake shahin bole dake';


const matches = sentence.match(/shahin/gi);
const occurances = matches ? matches.length : 0
const position = sentence.search(/shahin/i);
console.log(position);

