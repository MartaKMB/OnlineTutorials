/*let dragon = (name, size, element) =>
    name + ' is a ' +
    size + ' dragon that breathes ' +
    element + '!';

console.log(dragon('Fluffykins', 'tiny', 'lightning'));*/

//1. Currying - curriable function

let dragon =
    name =>
    size =>
    element =>
        name + ' is a ' +
        size + ' dragon that breathes ' +
        element + '!';

let fluffykinsDragon = dragon('Fluffykins');
let tinyDragon = fluffykinsDragon('tiny');

console.log(tinyDragon('lightning'));

//2. with library with functional nature

/* import _ from 'lodash';

let dragon = (name, size, element) =>
    name + ' is a ' +
    size + ' dragon that breathes ' +
    element + '!';

dragon = _curry(dragon);

let fluffykinsDragon = dragon('Fluffykins');
let tinyDragon = fluffykinsDragon('tiny');

console.log(tinyDragon('lightning')); */

//3. improve with curry fuction, loadash
/*let hasElement = _.curry((elem, obj) => obj.element === elem);
let lightingDragons = dragons.filter(hasElement('lightning'));*/

let dragons = [
    {name: 'fluffykins', element: 'lightning'},
    {name: 'noomi', element: 'lightning'},
    {name: 'karo', element: 'fire'},
    {name: 'doomer', element: 'timewarp'}
];

let hasElement = (elem, obj) => obj.element === elem;

let lightingDragons = dragons.filter(x => hasElement('lightning', x));

console.log(lightingDragons);


//https://lodash.com/docs#curry
