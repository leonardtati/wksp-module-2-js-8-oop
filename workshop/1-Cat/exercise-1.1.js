// Exercise 1.1
// ------------
// Creating a Cat class.

// A) Create an object that represents a cat.
// It should have properties for tiredness, hunger, loneliness and happiness.
// You can set all of these properties to 0 by default.

class Cat {
    constructor(){
        this.tiredness = 0;
        this.hunger = 0;
        this.loneliness = 0;
        this.hapiness = 0;
        this.species = 'cat'
    }

}



// B) Instantiate a cat called 'boots' with the Cat class.
let boots = new cat();

// C) What do you see when you console.log(boots)?
console.log(boots)
     //The porperties and their values are shown in an object.


// D) What if I want to output just boots' species?
console.log(boots.species)

// E) Boots' name is not part of its object.
//    Update the class above to accept have a name parameter
//    and pass Boots' name as an argument.

class Newercat extends Cat{
    constructor(name){
        super();
        this.name = name;
    }
}

console.log(Newercat('JOHNNY BOY'))