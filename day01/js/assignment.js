// Ask the user for their first name, last name, age and a place.

var firstName = prompt('what is your first name?'),
    lastName = prompt('what is your last name?'),
    age = prompt('what is your age?'),
    place = prompt('what is your favorite place?');

// Ask the user to confirm the place.
confirm('You said your favorite place was '+place+'. Is that correct?');

// Alert user's first name and last name.
alert(firstName + ' ' + lastName);

// Log user's age.
console.log(age);
