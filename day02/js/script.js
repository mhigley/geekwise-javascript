/*
var
function
return
this
new

location ??
name ??
*/

// String Methods
// .length
// console.log("anystring".length);

var str = "anotherStringThisOneVeryLong";
// console.log(str.length);

// .charAt()
// console.log(str.charAt());
// console.log(str.charAt(8));
// console.log(str.charAt(250));

// .indexOf()
// console.log(str.indexOf('t'));
// console.log(str.indexOf('T'));

// .concat()
var hello = 'Hello';
// console.log(hello.concat(' JavaScript'));
// console.log(hello + ' JavaScript');

// .substring()
var myName = 'Stephen';
// console.log(myName.substring(0, 3));
// console.log(myName.substring(3, 6));
// console.log(myName.substring(3));

// .substr()
var myHome = 'FresnoYeah';
// console.log(myHome.substr(0, 3));
// console.log(myHome.substr(3, 2));
// console.log(myHome.substr(3));

// .toLowerCase()
var myDog = 'Allie';
// console.log(myDog.toLowerCase());

// .toUpperCase()
myDog = 'Callie';
// console.log(myDog.toUpperCase());

// .trim()
var extraSpaces = '         stuff   and things     ';
// console.log(extraSpaces);
// console.log(extraSpaces.trim());


// Number Methods
// Number.isInteger()
// console.log(Number.isInteger(5));
// console.log(Number.isInteger(5.5));
// console.log(Number.isInteger(NaN));

// Number.parseFloat()
// console.log(Number.parseFloat('5.2'));
// console.log(Number.parseFloat('365.1 degrees'));
// console.log(Number.parseFloat('Lex Murphy is 11'));

// Number.parseInt()
// console.log(Number.parseInt('89'));
// console.log(Number.parseInt('words words'));
// console.log(parseInt('word'));

// var userNum = parseInt(prompt('pick a number'));
// console.log(typeof userNum);

// Number.isNaN()
// console.log(Number.isNaN(5));
// console.log(Number.isNaN('matt'));
// console.log(isNaN('matt'));
// console.log(Number.isNaN(NaN));
// console.log(isNaN(NaN));

// coersion??

// var userNum = parseInt(prompt('pick a number'));
// console.log(!!0);



// Date Object
var newDate = new Date();
// console.log(newDate);

// getDate()  // day of the month
// console.log(newDate.getDate());

// getFullYear()
// console.log(newDate.getFullYear());

// getDay()  // day of the week !!zero based!!
// console.log(newDate.getDay());

// getMonth() // month of year !!zero based!!
// console.log(newDate.getMonth());

// if(newDate.getDay() == 3){
//     console.log('April');
// }

var fullMonth = newDate.toLocaleString('en-us', {month: 'long'});
var numDate = newDate.toLocaleString('en-us', {day: '2-digit'});
var fullYear = newDate.getFullYear();
// console.log(fullMonth + ' ' + numDate + ', ' + fullYear);

// April, 03 2017


// Math Object
/*
    + = adding
    - = subtraction
    * = multiplication
    / = division
    % = Modulus
    ++ = Incrementor
    -- = Decrementor
*/

// var x = 5;
// console.log(x);

// ++x;
// console.log(x);

// ++x;
// console.log(x);

// for(var x = 0; x < 5; x++){
//
// }

// incrementor before value ??

var rand = Math.random(); // 0 - 1
console.log(rand);

var roundUp = Math.ceil(8.3);
console.log(roundUp);

var roundDown = Math.floor(9.9);
console.log(roundDown);

var roundNum = Math.round(4.5);
console.log(roundNum);

// max(), min()
// pow(x, y)
// sqrt(x)

/*
    Create a random number generator outputting a number between 1 - 100
    Create a random number generator outputting a number between 0 - 100

    Prompt user for their first AND last name
    Convert user response to modify string formatting capitalize first letter of both names, and lowercase all remaining letters
    example: user input -> MattHeW hiGlEY
    console: Matthew Higley

*/
