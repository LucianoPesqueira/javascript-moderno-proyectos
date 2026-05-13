//1-Declare firstName, lastName, country, city, age, isMarried, year variable and 
// assign value to it and use the typeof operator to check different data types.

const firstName = "Luciano";
const lastName = "Pesqueira";
const country = "Argentina";
const city = "Buenos Aires";
const age = 32;
const isMarried = false;
const year = 2026;

console.log(typeof(firstName), typeof(lastName), typeof(country), typeof(city), typeof(age), typeof(isMarried), typeof(year));

//2-Check if type of '10' is equal to 10
console.log(typeof('10') == typeof(10));

//3-Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10);

/*4-Boolean value is either true or false.

    1.Write three JavaScript statement which provide truthy value.
    2.Write three JavaScript statement which provide falsy value.
*/
if(1) { console.log("Truthy") } else { console.log("Falsy") };
if(" ") { console.log("Truthy") } else { console.log("Falsy") };
if([]) { console.log("Truthy") } else { console.log("Falsy") };

if(undefined) { console.log("Truthy") } else { console.log("Falsy") };
if(null) { console.log("Truthy") } else { console.log("Falsy") };
if("") { console.log("Truthy") } else { console.log("Falsy") };

/*5-Figure out the result of the following comparison expression first without using console.log(). 
 After you decide the result confirm it using console.log()

4 > 3 true
4 >= 3 true
4 < 3 false
4 <= 3 false
4 == 4 true
4 === 4 true
4 != 4 false
4 !== 4 false
4 != '4' true
4 == '4' true
4 === '4' false
Find the length of python and jargon and make a falsy comparison statement. */
console.log('python'.length != 'jargon'.length);

/*6-Figure out the result of the following expressions first without using console.log(). 
After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12 true
4 > 3 && 10 > 12 false
4 > 3 || 10 < 12 true
4 > 3 || 10 > 12 true
!(4 > 3) false
!(4 < 3) true
!(false) true
!(4 > 3 && 10 < 12) false
!(4 > 3 && 10 > 12) true
!(4 === '4') true
There is no 'on' in both dragon and python */
"dragon".includes("on") && "python".includes("on") ? console.log("Truthy") : console.log("falsy");

//7-
console.log();
console.log();
console.log();