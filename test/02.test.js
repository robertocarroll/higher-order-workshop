const { expect } = require('chai')
const exercise02 = require('../code/02.js')

describe.skip('Exercise 2',()=>{
        it('should return an array with only users from a particular city',()=> {
            expect(exercise02([
                { name: 'John', city: 'London', born: '2001-04-01' },
                { name: 'Lenny', city: 'New York', born: '1997-12-11' },
                { name: 'Andrew', city: 'Boston', born: '1987-02-22' },
                { name: 'Peter', city: 'Prague', born: '1936-03-24' },
                { name: 'Anna', city: 'Bratislava', born: '1973-11-18' },
                { name: 'Albert', city: 'Bratislava', born: '1940-12-11' },
                { name: 'Adam', city: 'Trnava', born: '1983-12-01' },
                { name: 'Robert', city: 'Bratislava', born: '1935-05-15' },
                { name: 'Robert', city: 'Prague', born: '1998-03-14' }
              ], 'Bratislava')).to.eql([
                { name: 'Anna', city: 'Bratislava', born: '1973-11-18' },
                { name: 'Albert', city: 'Bratislava', born: '1940-12-11' },
                { name: 'Robert', city: 'Bratislava', born: '1935-05-15' }
              ]);            
              expect(exercise02([
                { name: 'John', city: 'London', born: '2001-04-01' },
                { name: 'Lenny', city: 'New York', born: '1997-12-11' },
                { name: 'Andrew', city: 'Boston', born: '1987-02-22' },
                { name: 'Peter', city: 'Prague', born: '1936-03-24' },
                { name: 'Anna', city: 'Bratislava', born: '1973-11-18' },
                { name: 'Albert', city: 'Bratislava', born: '1940-12-11' },
                { name: 'Adam', city: 'Trnava', born: '1983-12-01' },
                { name: 'Robert', city: 'Bratislava', born: '1935-05-15' },
                { name: 'Robert', city: 'Prague', born: '1998-03-14' }
              ], 'Prague')).to.eql([
                { name: 'Peter', city: 'Prague', born: '1936-03-24' },
                { name: 'Robert', city: 'Prague', born: '1998-03-14' }
              ]); 
              expect(exercise02([
                { name: 'John', city: 'London', born: '2001-04-01' },
                { name: 'Lenny', city: 'New York', born: '1997-12-11' },
                { name: 'Andrew', city: 'Boston', born: '1987-02-22' },
                { name: 'Peter', city: 'Prague', born: '1936-03-24' },
                { name: 'Anna', city: 'Bratislava', born: '1973-11-18' },
                { name: 'Albert', city: 'Bratislava', born: '1940-12-11' },
                { name: 'Adam', city: 'Trnava', born: '1983-12-01' },
                { name: 'Robert', city: 'Bratislava', born: '1935-05-15' },
                { name: 'Robert', city: 'Prague', born: '1998-03-14' }
              ], 'New York')).to.eql([
                { name: 'Lenny', city: 'New York', born: '1997-12-11' }
              ]); 
        })
});