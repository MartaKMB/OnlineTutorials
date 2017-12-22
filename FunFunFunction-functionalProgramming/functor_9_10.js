//9 but... 10
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

// 10 but... 11
// functors are objects with have map method

// transformation of contects, transformation function: dragon => dragon.name

const dragons = [
    { name: 'Fluffykins', health: 70},
    { name: 'Deathlord', health: 65000},
    { name: 'Little pizza', health: 2},
];

const names = dragons.map(dragon => dragon.name);
console.log(names);

//promises are often implement like functors - it protects in this case situation, when there isn't any dragon
/*
const whenDragonLoaded = new Promise((resolve, reject) => {
    // fake loading
    setTimeout(() => resolve({
        name: 'Fluffykins', health: 70 
        }, 200));
});
    
const namesPromise = 
      whenDragonLoaded
        .map(dragon => dragon.name)
        .then(name => console.log(namesPromise));
*/

const nameLengths = 
      dragons
        .map(dragon => dragon.name)
        .map(dragonName => dragonName.length);

console.log(nameLengths);
