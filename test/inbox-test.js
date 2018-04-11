const assert = require('assert'); 
const ganache = require('ganache-cli'); // local ethereum test network
const Web3 = require('web3'); // Web3 is a constructor function therefore its capitalized
const web3 = new Web3(ganache.provider()); //create instance of Web3 and connect to ganache

beforeEach(() => {
    // Get a list of all accounts
    web3.eth.getAccounts()
        .then(fetchedAccounts => {
            console.log(fetchedAccounts);
        });


    // Use one of those account to deploy the contract 
});

describe('Inbox', () => {
    it('deploys a contract', () => {});
});








// Example of Mocha test 
// class Car {
//     park() {
//         return 'stopped';
//     }

//     drive() {
//         return 'vroom';
//     }
// }

// let car;
// beforeEach(() => {
//     car = new Car();
// });

// describe('Car', () => { // describe is collection of 'it' functions
//     it('can park', () => {
//         assert.equal(car.park(), 'stopped');
//     });

//     it('can drive', () => {
//         assert.equal(car.drive(), 'vroom');
//     });
// });