// Part 1

let dog = {
    sound: 'woof',
    talk: function() {
        console.log(this.sound)
    }
}
// object - functionality compose with data

dog.talk() // "woof"

let talkFunction = dog.talk
// function assigned to variable, and is now not longer a method, so this will be no longer be a dog
/* 
let talkFunction = function() { console.log(this.sound) }
*/

talkFunction() // undefined

// bound function to object - forces to be this object
let boundFunction = talkFunction.bind(dog)

boundFunction()

// realword example:

let button = document.getElementById('myNiceButton')

button.addEventListener(
    'click',
    //dog.talk undefined - window object
    dog.talk.bind(dog)
)

// Part 2

let talk = function() {
    console.log(this.sound)
}

let boromir = {
    
    // reference to function is assigned as property
    // speak: talk,
    blabber: talk,
    sound: 'One does not simply walk into mordor!'
}

let gollum = {
    jabber: boromir.blabber,
    sound: 'My precioussss....'
}

boromir.blabber()
gollum.jabber() // My preciousss...

// we make a copy
//boromir.speak = talk.bind(boromir)

talk()
// calling property of object
//boromir.speak()

// reference to the same function - not copy, to make copy make bind
/*let blabber = boromir.speak
blabber()*/

// bound function
/*let talkBoundToBoromir = talk.bind(boromir)
talkBoundToBoromir()*/