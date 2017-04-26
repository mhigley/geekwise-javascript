// var theDiv = document.getElementById('div');
// var theDivMarkup = document.querySelector('#divMarkup');
// console.log(theDiv);
// console.log(theDivMarkup);
//
// theDiv.textContent = '<p>Some text to the div</p>';
// theDivMarkup.innerHTML = '<p>Some <strong>regular</strong> text</p>';

// textContent & innerHTML
/*
var divSet = document.getElementById('set');
divSet.textContent = 'Here is a line of text.';
divSet.innerHTML = '<p>Here is a <strong>line</strong> of text.</p>';

var divGet = document.getElementById('get');
console.log(divGet.textContent);
console.log(divGet.innerHTML);

var writeMsg = '<h1>Info</h1><p>This content will be loaded onto the page</p>';
document.write(writeMsg);

var headlineMsg = '<h1>Note</h1><p>All HTML has been deleted';
document.querySelector('h1').addEventListener('click', function(){
    document.write(headlineMsg);
});
*/



// FORMS!!
var simpleForm = document.querySelector('form');
// console.log(simpleForm);

// console.log(simpleForm.fname.value);
// console.log(simpleForm.pword.value);

simpleForm[2].addEventListener('click', function(e){
    e.preventDefault();
    console.log(simpleForm.fname.value);
    console.log(simpleForm.pword.value);
});

// COMPLEX FORM!!
var cForm = document.getElementById('complex'),
    cFormEls = cForm.elements;
console.log(cForm);
// console.log(cFormEls);

cForm[11].addEventListener('click', function(e){
    e.preventDefault();
    for(let i = 0; i < cFormEls.length - 1; i++){
        // console.log(cFormEls[i].value);
        if(cFormEls[i].value){
            if(cFormEls[i].type != 'radio'){
                console.log(cFormEls[i].value);
            }
            if(cFormEls[i].type == 'radio' && cFormEls[i].checked){
                console.log(cFormEls[i].value);
            }
        }
    }
});

// target submit button
// add click event listener
// move functionality into the anonymous function
