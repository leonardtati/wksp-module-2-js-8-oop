// Exercise 1.3
// ------------
// Creating a Cat class - Part 3

// A) In the previous exercises, we created a Cat class and used it to create a boots object.
// Rewrite that Cat class, but let's also add some functions that will modify the various porperties of a cat.
// Write methods that will update tiredness, hunger, loneliness, and happiness.

// HINT: You need to write arrow functions here. () => {}
// - Write a sleep method that accept hours and reduces tiredness by 5 times that number.
// - Write an eat method that accept grams of food and reduces hunger by 1/5 that number.
// - Write an play method that accept minutes and reduces loneliness by 3 times that number.
// - the happiness property should be modified all of the above methods as well.
// You decide how much sleep, eat, and play affects your cat's happiness.


// B) call the different methods with appropriate values and then console.log boots to see what happened to the property values.
// Exercise 1.2
// ------------

class Cat {
    constructor(){
        this.tiredness = 2;
        this.hunger = 6;
        this.loneliness = 8;
        this.hapiness = 10;
        this.species = 'cat'
    }

}

let boots = new cat();


console.log(boots)
   



console.log(boots.species)



class Newercat extends Cat{
    constructor(name, breed){
        super();
        this.name = name;
        this.breed = breed;

        sleep = (hours) =>{
            this.tiredness = this.tiredness - hours *5
            this.hapiness = this.hapiness + hours*2;
        }
        eat = (grams) =>{
            this.hunger = this.hunger - grams/5
            this.hapiness = this.hapiness + grams*2;
        }
        play = (minutes) =>{
            this.loneliness = this.loneliness - minutes*3;
            this.hapiness = this.hapiness + minutes*2;
        }


    }
}

console.log(new Newercat('JOHNNY BOY', 'siamese'))

boots.sleep(300)
boots.eat(1000)
boots.play(45999)
console.log(boots)

//A) In the previous exercises, we created a Cat class and used it to create a boots object.
// Rewrite that Cat class, but let's also add some functions that will modify the various porperties of a cat.
// Write methods that will update tiredness, hunger, loneliness, and happiness.

// HINT: You need to write arrow functions here. () => {}
// - Write a sleep method that accept hours and reduces tiredness by 5 times that number.
// - Write an eat method that accept grams of food and reduces hunger by 1/5 that number.
// - Write an play method that accept minutes and reduces loneliness by 3 times that number.
// - the happiness property should be modified all of the above methods as well.
// You decide how much sleep, eat, and play affects your cat's happiness.


// B) call the different methods with appropriate values and then console.log boots to see what happened to the property values.
// Exercise 1.2
boots.sleep(300)
boots.eat(1000)
boots.play(45999)
console.log(boots)