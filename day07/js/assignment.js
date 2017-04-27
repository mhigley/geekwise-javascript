var key = document.querySelector('.key'),
    h1 = document.querySelector('h1'),
    keyed = document.querySelector('.keyed');

window.addEventListener('keydown', function(e){
    e.preventDefault();

    key.classList.add('hidden');
    keyed.parentElement.classList.remove('hidden');

    h1.textContent = e.keyCode;
    keyed.textContent = e.key;

    if(e.keyCode === 32){
        keyed.textContent = 'Spacebar';
    }

    /*
    key.classList.add('hidden');
    keyed.parentElement.classList.remove('hidden');

    e.preventDefault();
    keyed.textContent = e.key;

    switch(e.key){
        case '`':
        case '~':
            h1.textContent = e.charCode;
            break;
        case 'Tab':
        case 'Enter':
        case 'Backspace':
        case 'ArrowUp':
        case 'ArrowRight':
        case 'ArrowDown':
        case 'ArrowLeft':
            h1.textContent = e.keyCode;
            break;
        case ' ':
            h1.textContent = e.charCode;
            keyed.textContent = 'Spacebar';
            break;
        default:
            h1.textContent = e.charCode;
    }
    */
});
