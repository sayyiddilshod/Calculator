const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

const show = document.querySelector('.show');
const result = document.querySelector('.result');


const clean = document.getElementById('clean');
const percent = document.getElementById('percent');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const dot = document.getElementById('dot');
const equal = document.getElementById('equal');
const backspace = document.querySelector('.fa-backspace');





zero.addEventListener('click', ()=>{
    show.innerHTML += '0';
})
one.addEventListener('click', ()=>{
    show.innerHTML += '1';
})
two.addEventListener('click', ()=>{
    show.innerHTML += '2';
})
three.addEventListener('click', ()=>{
    show.innerHTML += '3';
})
four.addEventListener('click', ()=>{
    show.innerHTML += '4';
})
five.addEventListener('click', ()=>{
    show.innerHTML += '5';
})
six.addEventListener('click', ()=>{
    show.innerHTML += '6';
})
seven.addEventListener('click', ()=>{
    show.innerHTML += '7';
})
eight.addEventListener('click', ()=>{
    show.innerHTML += '8';
})
nine.addEventListener('click', ()=>{
    show.innerHTML += '9';
})


// Signs
percent.addEventListener('click', ()=>{
    percent.style.color = 'blue';
    show.innerHTML += '%';
})
divide.addEventListener('click', ()=>{
    show.innerHTML += '/';
})
multiply.addEventListener('click', ()=>{
    show.innerHTML += '*';
})
plus.addEventListener('click', ()=>{
    show.innerHTML += '+';
})
minus.addEventListener('click', ()=>{
    show.innerHTML += '-';
})
dot.addEventListener('click', ()=>{
    show.innerHTML += '.';
})


clean.addEventListener('click', ()=>{
    show.innerHTML = '';
    result.innerHTML = '';
})

backspace.addEventListener('click', ()=>{
    show.innerHTML = show.innerHTML.substring(0,  show.innerHTML.length - 1);
    if(show.innerHTML === ''){
        result.innerHTML = '';
    }
})

equal.addEventListener('click', ()=>{
    result.innerHTML = eval(show.innerHTML);
})
