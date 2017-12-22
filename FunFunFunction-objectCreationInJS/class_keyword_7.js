// JS does not have classes

class Mammal {
    constructor(sound) {
        
        // _ - sth like private in other in other language, but there is not such things like private members
        this._sound = sound
    }

    talk() {
        return this._sound
    }
}

class Dog extends Mammal {
    constructor() {
        super('woffeliwooffff')
    }
}


let fluffykins = new Dog()
fluffykins._sound = 1
let typeX = typeof Dog // function
let typeY = Dog.prototype.isPrototypeOf(fluffykins) //true

let x = Dog.prototype.talk.bind({
    _sound: 'ROAR'
})()

console.log(typeX)
console.log(typeY)
console.log(x)
