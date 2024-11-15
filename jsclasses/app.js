// create class
class Dog {
    // constructor
    constructor(name, breed, age, color) {
        this.name = name; // instance property
        this.breed = breed;
        this.age = age;
        this.color = color;
        Dog.#numberofDogs++;
    }
    
    // static property
    static #numberofDogs = 0; 

    // static method
    static resetDogCount(){
        Dog.#numberofDogs = 0;
    }

    // static set numberofDogs(newValue){
    //     return Dog.#numberofDogs++;
    // }

    // instance method
    bark() {
        // console.log(`Woof! Woof! I am ${this.name}.`);
        throw new BarkError(this.name, this.breed);
    }
}

let brockie = new Dog("Brockie", "Golden Retriever", '5', "Golden");
// console.log(brockie.bark());

// create unique Error class by inheriting from Error
class BarkError extends Error { 
    constructor(dogName, dogBreed) {
        // super() is called to use the Error Class properties/methods
        super(`${dogName} of breed ${dogBreed} failed to bark`);
        // override default Error class name
        this.name = "BarkError";
    }
}

// let newError = new Error()
try {
    brockie.bark()
} catch (error) {
    // throw new BarkError(brockie.name, brockie.breed);
    if (BarkError){
        console.log("Bark error occurred");
    }
}

Dog.numberofDogs = 10;
console.log(Dog.numberofDogs);