//const lodash = require('lodash');

const lodashSome = require('lodash/some');
const lodashEvery = require('lodash/every');

const userData = [
    { id: 1, name: 'Przemek', gender: 'male', age: 24 },
    { id: 2, name: 'Basia', gender: 'female', age: 53 },
    { id: 3, name: 'Jan', gender: 'male', age: 43 },
    { id: 4, name: 'Ania', gender: 'female', age: 18 }
];

const areFemaleUsersRegistered = lodashSome(userData, user => user.gender === 'female');
const isEveryUserOverEighteen = lodashEvery(userData, user => user.age >= 18);

console.log(`Q: Czy wśród użytkowników są kobiety? A: ${areFemaleUsersRegistered ? 'tak' : 'nie'}`);
console.log(`Q: Czy każdy z użytkowników ma powyżej 18 lat? A: ${isEveryUserOverEighteen ? 'tak' : 'nie'}`);