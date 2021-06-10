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

 // Try / Catch Error Handling

 // Uncaught ReferenceError
//  hello.toUpperCase(); 

 try {
     hello.toUpperCase();
 } catch {
     console.log("Error!");
 }
 console.log("<<After Error Code>>");

 function yell(msg) {
     try {
        console.log(msg.toUpperCase().repeat(3));
     } catch (error) {
         console.log(error);
         console.log("yell() requires a string argument.")
     }
     
 }