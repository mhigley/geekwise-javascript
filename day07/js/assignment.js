var key = document.querySelector('.key'),
    h1 = document.querySelector('h1'),
    keyed = document.querySelector('.keyed');

window.addEventListener('keypress', function(e){
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
});
