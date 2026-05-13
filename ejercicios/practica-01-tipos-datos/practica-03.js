//1
phrase = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
console.log(phrase.match(/love/gi).length);

//2
phrase = 'You cannot end a sentence with because because because is a conjunction';
console.log(phrase.match(/because/gi).length);

//3
let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// sentence = sentence.replace(/[%$@#;&]/g, '').toLowerCase();
sentence = sentence.replace(/[^a-zA-Z\s]/g, '').toLowerCase().split(" ");

let conteo = []; //[i: 3, am: 1, a: 2, teacher: 2, and: 2, …]

for (let palabra of sentence) {
    if (conteo[palabra]) {
        conteo[palabra]++;
    } else {
        conteo[palabra] = 1;
    }
}

const maxCount = Math.max(...Object.values(conteo));
const maxPalabra = Object.keys(conteo).filter(key => conteo[key] === maxCount);

console.log(sentence);
console.log(maxPalabra);

//4
phrase = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
phraseArray = phrase.split(","); //(3) ['He earns 5000 euro from salary per month', ' 10000 euro annual bonus', ' 15000 euro online courses per month.']
let total = 0;

for (let i = 0; i < phraseArray.length; i++) {
    let numbers = Number.parseInt(phraseArray[i].match(/\d+/g)); //obtengo los numeros
    let multiplier = phraseArray[i].includes("per month") ? 12 : 1;
    total += numbers * multiplier;
}

console.log(total);