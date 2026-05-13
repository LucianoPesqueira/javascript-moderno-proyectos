//1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

//2
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

//3
console.log(typeof('10'), typeof(10), typeof('10') === typeof(10), Number.parseInt('10') === 10);

//4
console.log(Number.parseFloat('9.8') === 10, Math.ceil(Number.parseFloat('9.8')) === 10);

//5
console.log('python'.includes('on') && 'jargon'.includes('on'));

//6
console.log('I hope this course is not full of jargon'.includes('jargon'));

//7
console.log(Math.floor(Math.random() * 101));

//8 
console.log(Math.floor(Math.random() * 51) + 50);

//9
console.log(Math.floor(Math.random() * 256));

//10
console.log('JavaScript'[Math.floor(Math.random() * 'JavaScript'.length)]);

//11
console.log(`1\t${1**0}\t${1**1}\t${1**2}\t${1**3}\n
2\t${2**0}\t${2**1}\t${2**2}\t${2**3}\n
3\t${3**0}\t${3**1}\t${3**2}\t${3**3}\n
4\t${4**0}\t${4**1}\t${4**2}\t${4**3}\n
5\t${5**0}\t${5**1}\t${5**2}\t${5**3}`);

//12
let phrase = 'You cannot end a sentence with because because because is a conjunction';
console.log(phrase.substring(phrase.indexOf("because"), phrase.lastIndexOf("because") + "because".length));
