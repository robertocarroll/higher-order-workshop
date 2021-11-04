const { expect } = require('chai')
const exercise04 = require('../code/04.js')

describe.skip('Exercise 4',()=>{
    it('should the year each car was made',()=> {
        expect(exercise04([
            { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
            { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
            { id: 3, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
            { id: 4, car_make: "Honda", car_model: "Accord", car_year: 1983 },
            { id: 5, car_make: "Mitsubishi", car_model: "Galant", car_year: 1990 },
            { id: 6, car_make: "Honda", car_model: "Accord", car_year: 1995 },
            { id: 7, car_make: "Smart", car_model: "Fortwo", car_year: 2009 },
            { id: 8, car_make: "Audi", car_model: "4000CS Quattro", car_year: 1987 },
            { id: 9, car_make: "Ford", car_model: "Windstar", car_year: 1996 },
            { id: 10, car_make: "Mercedes-Benz", car_model: "E-Class", car_year: 2000 },
            { id: 11, car_make: "Infiniti", car_model: "G35", car_year: 2004 },
            { id: 12, car_make: "Lotus", car_model: "Esprit", car_year: 2004 },
            { id: 13, car_make: "Chevrolet", car_model: "Cavalier", car_year: 1997 },
            { id: 14, car_make: "Dodge", car_model: "Ram Van 1500", car_year: 1999 }
          ])).to.eql([2009, 2001, 2010, 1983, 1990, 1995, 2009, 1987, 1996, 2000, 2004, 2004, 1997, 1999]);  

    })      
});