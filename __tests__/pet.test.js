const Pet = require("../src/pet");
let pet;
beforeEach(() => {
 pet = new Pet('Fido')
})
describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
  
    it('sets the name property', () => {
       expect(pet.name).toEqual('Fido');
      });
    
    it('has a initial age of 0', () => {
        expect(pet.age).toEqual(0);
      });
    
    it('has a initial hunger of 0', () => {
        expect(pet.hunger).toEqual(0);
      });
    
    it('has a initial fitness of 10', () => {
        expect(pet.fitness).toEqual(10);
      });
  });

  describe('growUp', () => {
    it('increments the age by 1', () => {
      pet.growUp();
        expect(pet.age).toEqual(1);
    });
   
    it('increments the hunger by 5', () => {
        pet.growUp();
          expect(pet.hunger).toEqual(5);
      });
    
     it('decrements the fitness by 3', () => {
        pet.growUp();
          expect(pet.fitness).toEqual(7);
      });
     it('throws an error if the pet is not alive due to age', () => {
        pet.age = 30;
        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
      });
      it('throws an error if the pet is not alive due to fitness', () => {
        pet.fitness = 0;
        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
      });
      it('throws an error if the pet is not alive due to hunger', () => {
        pet.hunger = 10;
        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
      });
  });

  describe('walk', () => {
    it('increases fitness by 4', () => {
      pet.fitness = 4;
      pet.walk();
        expect(pet.fitness).toEqual(8);
    });
    it('increases fitness to a maximum of 10', () => {
      pet.fitness = 8;
      pet.walk();
        expect(pet.fitness).toEqual(10);
    });
    it('throws an error if the pet is not alive', () => {
      pet.age = 30;
      expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
    });
  });

  describe('feed', () => {
    it('decreases hunger by 3', () => {
      pet.hunger = 5;
      pet.feed();
        expect(pet.hunger).toEqual(2);
    });
    it('decreases hunger to a minimum of 0', () => {
      pet.hunger = 2;
      pet.feed();
       expect(pet.hunger).toEqual(0);
    });
    it('throws an error if the pet is not alive', () => {
      pet.age = 30;
      expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
  });
  describe('checkUp', () => {
    it('if fitness is 3 or less returns "I need a walk"', () => {
    pet.fitness = 2;
      expect(pet.checkUp()).toEqual("I need a walk");
    });

    it('if hunger is 5 or more returns "I am hungry"', () => {
      pet.hunger = 6;
        expect(pet.checkUp()).toEqual("I am hungry");
      });

    it('if hunger is 5 or more and fitness is 3 or less returns "I am hungry AND I need a walk', () => {
      pet.fitness = 2;
      pet.hunger = 6;
        expect(pet.checkUp()).toEqual("I am hungry AND I need a walk");
      });

      it('if hunger is less than 5 and fitness is more than 3 returns "I feel great!', () => {
        pet.fitness = 7;
        pet.hunger = 2;
         expect(pet.checkUp()).toEqual("I feel great!");
        });
      it('throws an error if the pet is not alive', () => {
        pet.age = 30;
         expect(pet.checkUp()).toBe('Your pet is no longer alive :(');
      });

  });
       

   describe('isAlive', () => {
        it('if fitness is 0 or less return false', () => {
         pet.fitness = 0;
          expect(pet.isAlive).toBe(false);
            });
            
        it('if hunger is 10 or more return false', () => {
          pet.hunger = 10;
            expect(pet.isAlive).toBe(false);
                 });   
        it('if age is 30 or more return false', () => {
          pet.age = 30;
            expect(pet.isAlive).toBe(false);
                     });
         it('if fitness is above minimum, hunger is below maximum and age is less than 30 returns true', () => {
          pet.fitness = 4;
          pet.hunger = 8;
          pet.age = 26;
            expect(pet.isAlive).toBe(true);
             });
          });
   describe('adoptsChild', () => {
     it('takes object as a child', () => {
       const child = new Pet('Dave');
       pet.adoptsChild(child);
        expect(pet.children).toEqual([{name: 'Dave', age: 0, hunger: 0, fitness: 10, children: []}]);
     })
     it('adds one element to the children array', () => {
       const child = new Pet('Jonny');
       pet.adoptsChild(child);
       expect(pet.children.length).toEqual(1)
     })
   })      
