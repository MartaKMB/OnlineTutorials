function plus1(value) {
    return value + 1;
}

function minus1(value) {
    return value - 1;
}

console.log(plus1(3));

//map is functor, so for adding one to every element in array

console.log([3,4].map(plus1));

//plusing string - string functor

function stringFunctor(value, fn) {
    let chars = value.split('');
    return chars.map(function(char){
        return String.fromCharCode(fn(char.charCodeAt(0)))
    }).join('')
}

let plusingString = stringFunctor('ABC', plus1);
let minusingString = stringFunctor('XYZ', minus1);
console.log(plusingString);
console.log(minusingString);

// Functors take value and functions
//passes values into functions and create new structur