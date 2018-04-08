const assert = require('assert'); 
const ganache = require('ganache-cli'); // local ethereum test network
const Web3 = require('web3'); // Web3 is a constructor function therefore its capitalized
const web3 = new Web3(ganache.provider()); //create instance of Web3 and connect to ganache


class Car {
    park() {
        return 'stopped';
    }

    drive() {
        return 'vroom';
    }
}

describe('Car', () => { // describe is collection of 'it' functions
    it('can park', () => {
        const car = new Car();
        assert.equal(car.park(), 'stopped');
    });

    it('can drive', () => {
        const car = new Car();
        assert.equal(car.drive(), 'vroom');
    });
});