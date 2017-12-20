//1. Reject filter but opposite; find - find single item - > list trasformation
//2. Reduce - it can be use to express any list transformation; function on array object and takes call back function but wants an object (starting point - 0)

const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
];

let totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);

/* let totalAmount = orders.reduce(function(sum, order){
    console.log('hello', sum, order);
    return sum + order.amount;
}, 0); */

/* let totalAmount = 0;
for(let i=0; i < orders.length; i++) {
    totalAmount += orders[i].amount;
} */

console.log(totalAmount);