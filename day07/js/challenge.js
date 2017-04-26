var answer = document.querySelector('input');
var runBtn = document.querySelector('button');

runBtn.addEventListener('click', function(){
    // alphWords(answer.value);
    revAlphWord(answer.value);
});
// Accept user value, arrange words alphabetically

function alphWords(userStr){
    console.log(userStr.split(' ').sort());
}

function revAlphWord(userStr){
    var userStrArr = userStr.split(' ');
    var userStrRev = [];
    userStrArr.forEach(function(word){
        userStrRev.push(word.split('').sort().reverse().join(''));
    });
    console.log(userStrRev.sort().join(' '));
}
// .split()
// .sort()
// .reverse()
// .join()

// reverse alphebetize each character in each word
// order complete string alphebetized

// background-color: hsl(0, 50%, 50%);

window.addEventListener('mousemove', function(evt){
    // console.clear();
    // console.log(this);
    // console.log(evt.x, evt.y);
    // console.log(evt.layerX, evt.layerY);
    // console.log(evt.screenX, evt.screenY);
    // console.log(evt.pageX, evt.pageY);
    // console.log(evt.clientX, evt.clientY);
    var winW = this.innerWidth;
    var winH = this.innerHeight;
    var mouseX = evt.x;
    var mouseY = evt.y;

    var hue = Math.round(mouseX / winW * 360);
    var perc = Math.round(mouseY / winH * 100);

    document.body.style.backgroundColor = 'hsl('+hue+', '+perc+'%, '+perc+'%)';

});
