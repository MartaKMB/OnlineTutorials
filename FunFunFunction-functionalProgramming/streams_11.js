// streams - string of data

// streams - as streams of events - in frontend
// make app stateless

//https://baconjs.github.io/

const up = $('#up').asEventStream('click');
const down = $('#down').asEventStream('click');

let counter = 
    up.map(1).merge(down.map(-1))
        .scan(0, function(x,y) { return x+y });

counter.assign($('#counter'), 'text');



/*const stupidNumberStream = {
    each: (callback) => {
        setTimeout(() => callback(1), 1000)
        setTimeout(() => callback(2), 2000)
        setTimeout(() => callback(3), 3000)
    }
}

createStupidNumberStream.each(console.log);*/

// streams for a lot data - process each one individualy

/*const fs = require('fs');
const highland = require('highland');

highland(fs.createReadStream('customers.csv', 'utf8'))
    .split()
    .map(line => line.split(','))
    .map(parts => ({
        name: parts[0],
        numPurchases: parts[1]
    }))
    .filter(customer = customer.numPurchases > 2)
    .map(customer => customer.name)
    .each(console.log);*/