// Object.create - static method on the object prototype that create new object with the prototape set to object
// its more natural than new keyword

const cat = {
    init: function(sound) {
        this.sound = sound
        return this
    },
    makeSound: function() {
        console.log(this.sound)
    }
}

//cat.makeSound()
/*
const mark = Object.create(cat)
mark.sound = 'mewuuF'
mark.makeSound() */

const mark = Object.create(cat).init('mewuuF')
mark.makeSound()

const waffles = Object.create(cat).init('mrrrrooow')
waffles.makeSound()

console.log('Is mark a cat?', cat.isPrototypeOf(mark))
// mark is new object that have reference to cat

// rebuilding

function objectCreate(proto) {
    const obj = {}
    Object.setPrototypeOf(obj, proto)
    return obj
}

const mark2 = objectCreate(cat)
mark2.sound = 'mewuuF'
mark2.makeSound()

const waffles2 =objectCreate(cat)
waffles2.sound = 'mrrrrooow'
waffles2.makeSound()

console.log('Is mark a cat?', cat.isPrototypeOf(mark))