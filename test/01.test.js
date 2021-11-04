const { expect } = require('chai')
const exercise01 = require('../code/01.js')

describe.skip('Exercise 1',()=>{
        it('should check if an array contains a banana',()=> {
            expect(exercise01([ 'orange', 'grape', 'apple', 'mango', 'banana' ])).to.equal(true);            
            expect(exercise01([ 'orange', 'grape', 'apple', 'mango' ])).to.equal(false);
            expect(exercise01([ 'banana', 'grape', 'apple', 'mango', 'banana' ])).to.equal(true);
        })
});