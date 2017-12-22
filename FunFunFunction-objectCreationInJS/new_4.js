function Person(saying) {
    this.saying = saying
}

// prototape is special property, every object has prototype automaticly

Person.prototype.talk = function() {
    console.log('I say: ', this.saying)
}

// example from ES5, so var --> use const not var ;)

/* var crockford = new Person('SEMICOLANS!!!1one1')
crockford.talk()*/

//new - create new object, and look what wharewer we call new object and set prototype, call function/constructor - new object assigned to new variable, and return new object sometimes and execute constructor

// rebuild from begining
function newNew(constructor) {
    var obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    /*ES6
    var argsArray = Array.from(arguments)
    console.log(argsArray.slice(1))*/
//    var argsArray = Array.prototype.slice.apply(arguments)
    // aplly - bind but execute inmedietly
//    constructor.apply(obj, argsArray.slice(1)) // obj
    return obj
}

var crockford = newNew(Person, 'SEMICOLANS!!!1one1')
crockford.talk()