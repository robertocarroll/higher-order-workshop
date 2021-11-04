 
const { expect } = require('chai')
const exercise00 = require('../code/00.js')

describe('Exercise 0',()=>{
        it('should return Hello World!',()=> {
            expect(exercise00()).to.equal("Hello World!");
        })
});