//1. map is a function on the array object
//2. filter expect true or false, map will include all items and put to new array - subset of the object
//3. map expect any callback to return any object
//4. less code less bugs

const animals = [
    { name: 'Fluffykins', species: 'rabbit'},
    { name: 'Caro', species: 'dog'},
    { name: 'Hamilton', species: 'dog'},
    { name: 'Harold', species: 'fish'},
    { name: 'Ursula', species: 'cat'},
    { name: 'Jimmy', species: 'fish'},
];

/*const names = animals.map(function(animal){
    return animal.name + ' is a ' + animal.species;
}); */

/*const names = [];
for(let i=0; i < animals.length; i++) {
    names.push(animals[i].name);
}*/


//5. arrow functions - ES6
//6. in fucntional programming you will go even shorter

const names = animals.map((x) => x.name + ' is a ' + x.species);

console.log(names);