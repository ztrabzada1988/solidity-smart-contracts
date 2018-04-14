const assert = require('assert'); 
const ganache = require('ganache-cli'); // local ethereum test network
const Web3 = require('web3'); // web3 is our portel to ethereum world. Web3 is a constructor function therefore its capitalized
const provider = ganache.provider();
const web3 = new Web3(provider); // web3 must alway get a provider to know what network it is getting connected to. Provider creates instance of Web3 and connect to ganache
const { interface, bytecode } = require('../compile'); // interface is our ABI or our translater

let accounts;
let inbox;

beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();     

    // Use one of those account to deploy the contract 
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there'] })
        .send({ from: accounts[0], gas: '1000000' });

    inbox.setProvider(provider);    
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
    });

    it('has a default message', async () => {
        const message = await inbox.methods.message().call(); // we are calling message method from our Inbox.sol
        assert.equal(message, 'Hi there');
    });

    it('can change the message', async () => {
        await inbox.methods.setMessage('bye').send({ from: accounts[0] });
        const message = await inbox.methods.message().call();
        assert.equal(message, 'bye');
    });
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