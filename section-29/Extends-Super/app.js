class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`;
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        super(name, age) // references Pet class constructor declarations
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'Meow!';
    }
}

class Dog extends Pet {
    bark() {
        return 'Woof!';
    }
}