// Prototape - delegate, form of iheritance
// Classes uses prototypes
// Prototype are simpler than classes

/*function talk(sound) {
    console.log(sound)
}
talk('woof')*/

// this is global object, so we assigned to other object

function talk() {
    console.log(this)
    console.log(this.sound)
}

let animal = {
    // talk: talk - the same name and value: in ES6
    talk
}

let cat = {
    sound: 'meow'
}

// cat.talk() // talk is not a function

let dog = {
    sound: 'woof!'
}

Object.setPrototypeOf(cat, animal)
// loking for property in Prototype
// this context will be still cat
cat.talk()

Object.setPrototypeOf(dog, animal)

// we don't create copy
animal.talk = function() {
    console.log('i am a little teapot')
}

dog.talk()

let prairieDog = {
    howl: function() {
        console.log(this.sound.toUpperCase())
    }
}

Object.setPrototypeOf(prairieDog, dog)
prairieDog.howl()

// for this object use other object