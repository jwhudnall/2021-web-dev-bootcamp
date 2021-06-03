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

// Nested loops
for (let i = 1; i <= 10; i++) {
    console.log(`i is: ${i}`);
    for (let j = 1; j <= 3; j++) {
        console.log(`\tj is: ${j}`);
    }
} 

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Kevin', 'Antonio'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++) {
    for (let j = 0; j < seatingChart[i].length; j++) {
        const row = seatingChart[i]; // Declare new variable to clarify logic below
        console.log(`Array #${i + 1}: ${row[j]}`);
    }
}