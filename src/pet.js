const AGE_INCREMENT = 1; 
const MAXIMUM_AGE = 30;

const HUNGER_INCREMENT = 5;
const HUNGER_DECREMENT = 3;
const MINIMUM_HUNGER = 0;
const HUNGER_THRESHOLD = 5;
const MAXIMUM_HUNGER = 10;

const FITNESS_DECREMENT = 3;
const FITNESS_INCREMENT = 4;
const MAXIMUM_FITNESS = 10;
const FITNESS_THRESHOLD = 3;
const MINIMUM_FITNESS = 0;

const DEFAULT_CONDITION = "I feel great!";
const DEATH_STATEMENT = 'Your pet is no longer alive :(';

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
    this.children = [];
} 
Pet.prototype = {
    get isAlive() {
      return this.age < MAXIMUM_AGE && this.hunger < MAXIMUM_HUNGER && this.fitness > MINIMUM_FITNESS;
    },
  
growUp() {
    if (!this.isAlive) { 
        throw new Error(DEATH_STATEMENT);
        }
    this.age += AGE_INCREMENT;
    this.hunger += HUNGER_INCREMENT;
    this.fitness -= FITNESS_DECREMENT;
},
walk() {
    if (!this.isAlive) { 
        throw new Error(DEATH_STATEMENT);
        }
   if((this.fitness + FITNESS_INCREMENT) <= MAXIMUM_FITNESS){
    this.fitness += FITNESS_INCREMENT;
   } else {
    this.fitness = MAXIMUM_FITNESS;
   }
},
feed()  {
    if (!this.isAlive) {
        throw new Error(DEATH_STATEMENT);
      }
    if ((this.hunger - HUNGER_DECREMENT) >= MINIMUM_HUNGER){
    this.hunger -= HUNGER_DECREMENT;
    } else {
        this.hunger = MINIMUM_HUNGER;
    }
},
checkUp()  {
    if (!this.isAlive) {
        return (DEATH_STATEMENT);
      }
    if (this.fitness <= FITNESS_THRESHOLD && this.hunger >= HUNGER_THRESHOLD ) {
        return "I am hungry AND I need a walk"
    }
    
    if (this.fitness <= FITNESS_THRESHOLD) {
        return "I need a walk";
    }
    if (this.hunger >= HUNGER_THRESHOLD) {
        return "I am hungry";
    }
    else { 
        return DEFAULT_CONDITION;
    }
},
adoptsChild(child) {
   // let childArray = this.children
   this.children.push(child);

}
};


module.exports = Pet;