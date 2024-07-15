const sum = require('./index');

if(sum(1, 2) !== 3){
    throw new Error('Test failed for sum(1, 2)');
}

if(sum(2, 2) !== 4){
    throw new Error('Test failed for sum(2, 2)');
}

if(sum(3, 2) !== 5){
    throw new Error('Test failed for sum(3, 2)');
}

console.log('All tests passed!');
    