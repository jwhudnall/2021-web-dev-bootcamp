const animals = ['dogs', 'cats', 'lions'];

for (let i = 0; i < animals.length; i++) {
    console.log(`Index ${i}: ${animals[i]}`);
}

// now in reverse
for (let i = animals.length - 1; i >= 0; i--) {
    console.log(`Index ${i}: ${animals[i]}`);
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
}