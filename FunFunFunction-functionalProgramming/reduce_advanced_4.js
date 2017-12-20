//1. turn data.txt in object
//2. babel is not any more required, but still it doesn't work, so I make examples from mozilla.org

/* let fs = require('fs')

const output = fs.readFileSync('data.txt', 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split('\t'))
    .reduce((customers, line) => {
        customers[line[0]] = customers[line[0]] || []
        customers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line[3]
        })
        return customers
    }, {})

console.log('output', JSON.stringify(output, null, 2))
*/

//https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/Reduce
//The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

//Examples:

//A. sum all the values of an array

const sum = [0,1,2,3].reduce((a,b) => a + b, 0);

console.log(sum);

//B. Flatten an array of arrays

const flattened = [[0,1], [2,3], [4,5]].reduce(
    (acc, cur) => acc.concat(cur),
    []
);

console.log(flattened);

//C. Counting instances of values in an object

const names = ['Alice', 'Bob', 'Bruce', 'Marta', 'Alice', 'Marta', 'Marta'];

const countedNames = names.reduce(
    function(allNames, name){
    if(name in allNames) {
        allNames[name]++;
    } else {
        allNames[name] = 1;
    }
    return allNames;
    }, {}
);

console.log(countedNames);

//D. Bonding arrays contained in an array of objects using the spread operator and initialValue

const friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
}, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
}, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
}];

const allBooks = friends.reduce(
    function(prev, curr){
        return [...prev, ...curr.books];
    },
    ['Alphabet']
);

console.log(allBooks);
