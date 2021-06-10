// Keyword "this"
const dog = {
    name: 'Millie',
    color: 'blue',
    bark() {
        console.log("This is:", this)
        console.log(`The ${this.color} dog ${this.name} goes Woof Woof!`);
    }
}

const bark2 = dog.bark; // "this" within bark() method reverts to "Window" object, not "dog"

// Egg Laying Exercise
const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg: function() {
        this.eggCount++;
        return "EGG";
    }
}