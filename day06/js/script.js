// Named Function Declaration
/*
function myName() {
    // all my cool code
    console.log('not cool');
}

myName();
*/

// Anonymous function
/*
function() {
    //stuff and things
}
*/

// Function Expression

/*
var myName = function() {
    console.log('hello from the other side');
};
*/

// Immediately Invoked Function Expression (IIFE)
/*
(function() {
    var test = 'this is a test';
    alert('This will run IMMEDIATELY!!!');
}());
*/

/* -------------| Parameters*/
// function myName( lastname, firstname ){
//     console.log(firstname + ' ' + lastname);
// }

/* ----| Arguments */
// myName('Matthew', 'Higley');

// write a function that accepts a number
// log that number * 5

/*
function myMulti(a) {
    console.log(a * 5);
}

myMulti(2, 'Matt', [1, 2, 3]);
*/

/*
var myName = function() {
    console.log(
        arguments[0] + ' ' + arguments[3]
    );

    // arr.forEach();

    for(let i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }

    for(args in arguments) {
        console.log(arguments[args]);
    }
};

myName('Matthew', false, ['red', 'green', 'blue'], 'Higley', 23, true);
*/

// Return statement

/*
var myName = getName('Davis');

function getName(lastname){
    return 'Matthew ' + lastname; // == 'Higley'
}

console.log(myName);
*/

// call getName function passing in a string
// return string back to original function call
// console myName


// create a variable and call birthplace function
// write birthplace function expecting 2 things
// return a contatenated string piecing city & state together separated by a comma :    "fresno, california"
// console the variable

/*
var userCity = prompt('what city were you born in?');
var userState = prompt('what state were you born in?');

function setBirthplace(city, state) {
    return city + ', ' + state;
}

console.log(
    setBirthplace(userCity, userState)
)
*/

/*
var userName = modUserName( prompt('what is your name?') ); // Scooby
var lastName = modUserName( prompt('what is your last name?') );

// var cappedUserName = userName.charAt(0).toUpperCase() + userName.substr(1).toLowerCase();
// console.log(cappedUserName);

function modUserName(name) {
    return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
}

console.log(userName + ' ' + lastName);
*/

// DOM Manipulation
// .getElementById()

// var btn = document.getElementById('myBtn');
//
// console.log(btn);
//
// // .getElementsByTagName()
//
// var links = document.getElementsByTagName('a');
//
// console.log(links);
//
// // .getElementsByClassName()
//
// var dropdownLinks = document.getElementsByClassName('dropdown');
//
// console.log(dropdownLinks);
//
// // .querySelector()
//
// var turkey = document.querySelector('#turkey');
//
// console.log(turkey);
//
// var oneLink = document.querySelector('ul li:last-child a');
//
// console.log(oneLink);
//
// // .querySelectorAll()
//
// var allDropdowns = document.querySelectorAll('.dropdown');
//
// console.log(allDropdowns);
//
// var allSubLinks = document.querySelectorAll('ul li li a');
//
// console.log(allSubLinks);


// Event Listeners
// .addEventListener()
var btn = document.getElementById('myBtn');

// click
btn.addEventListener('click', function() {
    btn.style.backgroundColor = 'red';
});

// mousedown
btn.addEventListener('mousedown', function(){
    btn.style.backgroundColor = 'green';
});

// mouseup
btn.addEventListener('mouseup', function(){
    btn.style.backgroundColor = 'blue';
});

// mousemove
window.addEventListener('mousemove', function(e){
    // console.log(e);
    // console.clear();
    // console.log(e.screenX + ":" + e.screenY);
});

// mouseenter
var btn = document.querySelector('#myBtn');

btn.addEventListener('mouseenter', function() {
    btn.style.fontSize = '2em';
    btn.style.color = "white";
    btn.style.backgroundColor = "black";
});

// mouseleave
btn.addEventListener('mouseleave', function(){
    btn.style.fontSize = '1em';
    btn.style.color = 'black';
    btn.style.backgroundColor = "gray";
});

// scroll
// window.addEventListener('scroll', function(e){
//     console.log(e);
// });

// keypress
window.addEventListener('keypress', function(e){
    console.log(e);
});

// keydown
window.addEventListener('keydown', function(e){
    console.log(e);
});

// keyup
window.addEventListener('keyup', function(e){
    console.log(e);
});
