let person = {
    firstName: "Ivan",
    lastName: "Pratt",
    age: 20
}

let meal = {
appatizer: "salad",
entree: "rice and beef",
dessert: "chocolate",
drink: "lemonade",
}

const {dessert} = meal;
// console.log(dessert);

let {entree: bestFoodEver} = meal
let {drink: bestDrinkNever, appatizer} = meal
// console.log(bestFoodEver)
// console.log(bestDrinkNever, appatizer)


for(let key in person) {
// console.log(key)
// console.log(key['age'])
// console.log(key.name)
console.log(person[key])
// console.log(person.key)
}


person.job = "Student"
person ["hairColor"] = "Black"
//console.log(person)

delete person.job

//console.log(person)

delete person['hairColor']

// console.log(person)


class Animals {
    constructor(name, species, size) {
        this.name = name
        this.species = species
        this.size = size
    };

    greeting() {
            console.log(`Hi, my name is ${this.name} and ${this.species} and ${this.size} is my size`)

    }

}

let zebra = new Animals("Zebra", "Mammal", "Medium")
// console.log(zebra.size)
// console.log(zebra)

zebra.greeting()

// console.log(this.name)


class Reptiles extends Animals {
    constructor(name, species, size) {
        super(name, species, size)

        this.cute = false;
    }

    changeCute() {
        if (this.cute === false) {
            this.cute = true
        } else {
            this.cute = false
        }

    }

}

let snake = new Reptiles("Ball Python", "Snake", "Smalls")
console.log(snake)
snake.changeCute()
console.log(snake)