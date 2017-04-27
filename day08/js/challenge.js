// challeng 01
var body = document.body;

var div = document.createElement('div'),
    img = document.createElement('img'),
    h1 = document.createElement('h1'),
    p = document.createElement('p'),
    a = document.createElement('a');

img.src = "https://skipio.com/wp-content/uploads/2016/09/bio-placeholder-5.png";
img.alt = 'Picture of me in the snow';
h1.textContent = 'Matthew Higley';
p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et ante et odio volutpat pulvinar vel nec sem.';
a.href = '#';
a.target = '_blank';
a.textContent = 'more...';

div.append(img, h1, p, a);
body.appendChild(div);

// challenge 02
var body = document.body;

var div = document.createElement('div'),
    form = document.createElement('form'),
    inputUsername = document.createElement('input'),
    inputPassword = document.createElement('input'),
    inputSubmit = document.createElement('input');

inputUsername.placeholder = 'username';
inputUsername.type = 'text';
inputPassword.placeholder = 'password';
inputPassword.type = 'password';
inputSubmit.value = 'Submit';
inputSubmit.type = 'submit';

form.append(inputUsername, inputPassword, inputSubmit);
div.append(form);
body.append(div);

inputSubmit.addEventListener('click', function(e){
    e.preventDefault();
    div.remove(div);
});

var formBtn = document.getElementById('form');
formBtn.addEventListener('click', function(e){
    e.preventDefault();
    form.append(inputUsername, inputPassword, inputSubmit);
    div.append(form);
    body.append(div);
});
