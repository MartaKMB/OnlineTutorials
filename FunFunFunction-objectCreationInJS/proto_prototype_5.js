let cat = {
    breed: 'munchkin'
}

let myCat = {
    name: 'Fluffykins'
}

Object.setPrototypeOf(myCat, cat)
console.log(myCat.breed)

// Prototypes - objects that delegate to others object
// refernce to the same object

//myCat.__proto__ 

cat.tailLength = 15
console.log(myCat.__proto__)
console.log(myCat.tailLength)

//.prototype property - exist only on functions, in case you would like to use this like constructor, only for using new keyword
// instead of prototype it will be better to call it prototypeToInstall
function Dog() {}
Dog.prototype.breed = 'Bulldog'

let myDoggie = new Dog()
console.log(myDoggie.breed)

function Giraffe() {}
console.log(Giraffe.prototype) // object, constructor

let koala = {}
console.log(koala.prototype) // undefined
console.log(koala.__proto__) // object

let checkKoala = koala.__proto__ === Object.prototype
console.log(checkKoala)

// Object is not a global object is a function