

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
// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good. Our Cat can modify its properties but we don't have a way to lower them...
// Write a wait method that accepts a minutes parameter and slowly lowers or increases the properties.



// B) Make Boots wait 20 minutes and call then console.log(boots);



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
        wait = (minutes) =>{
            this.tiredness += minutes * 0.1;
        this.hunger += minutes * 1.5;
        this.loneliness += minutes * 1;
        this.happiness -= minutes * 2;
        }


    }
}

console.log(new Newercat('JOHNNY BOY', 'siamese'))

boots.sleep(300)
boots.eat(1000)
boots.play(45999)
console.log(boots)


boots.sleep(300)
boots.eat(1000)
boots.play(45999)
console.log(boots)

boots.wait(5000)
console.log(boots)

