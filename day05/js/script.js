// ternary statements

// var age = prompt('How old are you?');

// syntax is----   exp ? ifTrue : ifFalse;
// var movieRestriction = age >= 18 ?
//     console.log('Old enough') :
//     console.log('Too young');
//
// // same as
// if (age >= 18) {
//     console.log('Old enough');
// } else {
//     console.log('Too young');
// };

// another exercise
// var age = prompt('How old are you?');

// var url = age >= 18 ?
//     (
//         alert('okay, you may proceed'),
//         'proceed.html'
//     ) :
//     (
//         alert('sorry, you\'re not old enough for rated R movies'),
//         'stop.html'
//     );
//
// window.location.assign(url);

// Switch statements
//
// var today = new Date().getDay();
//
// switch(today) {
//     case 0:
//     case 6:
//         console.log("Happy Weekend!");
//         break;
//     case 1:
//         console.log("Sounds like a case of the Mondays");
//         break;
//     case 2:
//         console.log("Tuesday Morning");
//         break;
//     case 3:
//         console.log("Wednesday Afternoon");
//         break;
//     case 4:
//         console.log("Thursday is this day");
//         break;
//     case 5:
//         console.log("It's Friday");
//         break;
// }
//
// switch(today) {
//     case 1:
//         console.log("It's Monday");
//         break;
//     case 2:
//         console.log("It's Tuesday");
//     default:
//         console.log("It's not Monday or Tuesday");
// }

// cluttering the global namespace. BAD!
//
// var coffee = 'Dutch Bros';
//
// function myCoffee(){
//     var coffee = 'Starbucks';
//     console.log(coffee);
//
//     coffee = 'Peets';
//     console.log(coffee);
//
//     var otherCoffee = 'Dunkin';
// }
//
//
//
// console.log(coffee);
// console.log(otherCoffee);


// for loop
// for(let i = 0; i < 5; i++){
//     console.log('loop 1', i);
// }
// console.log(i);
// let coffee;
//
// function myCoffee(){
//     let coffee = 'Dutch Bros';
//     console.log(coffee);
// }
// myCoffee();
//
// coffee = 'Dunkin';
// console.log(coffee);

// Var is function scope

// Let is Block scope

// Const
// const newCoffee = 'Lanna';
// const newCoffee = 'McDs';
// console.log(newCoffee);
//
// newCoffee = 'Peets';
// console.log(newCoffee);

// Variable Hoisting



// console.log(x);
//
// var x = 1;
// let y = 2;
// const z = 3;
//
// console.log(y);
// console.log(z);
//
// console.log(myFunc);
//
// var myFunc = function(){
//     //stuff and things
//     console.log('stuff and things');
// }

// var userName = prompt('what is your first name?');
// userName = userName[0].toUpperCase() + userName.substr(1).toLowerCase();
var firstName, middleName, lastName;

var fn = document.getElementById('first');
var mn = document.getElementsByTagName('button')[1];
var ln = document.querySelector('.last');

fn.addEventListener('click', function(){
    firstName = getUserName('first');
});
mn.addEventListener('click', function(){
    middleName = getUserName('middle');
});
ln.addEventListener('click', function(){
    lastName = getUserName('last');
    alert(firstName + ' ' + middleName + ' ' + lastName);
});

function getUserName(name) {
    var name = prompt('what is your '+ name +' name?');
    name = name[0].toUpperCase() + name.substr(1).toLowerCase();
    return name;
}

// console.log(firstName, lastName);
/*
var myName = getName();

function getName() {
    return 'Matthew';
}

console.log(myName);
*/
