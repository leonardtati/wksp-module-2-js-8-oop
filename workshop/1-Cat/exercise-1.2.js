// Exercise 1.2
// ------------
// Creating a Cat class - Part 2

// A) In the previous exercise, Boots' name is not part of its object.
// Update the Cat class to accept have a name parameter and a breed parameter and
// then pass Boots' name and breed as arguments when you instantiate the boots object.
// When you are done, console.log the boots object
// and confirm that you have everything in there.

// By the way, Boots is a Simaese cat...

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
    constructor(name, breed){
        super();
        this.name = name;
        this.breed = breed;
    }
}

console.log(new Newercat('JOHNNY BOY', 'siamese'))