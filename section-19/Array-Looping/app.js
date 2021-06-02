const animals = ['dogs', 'cats', 'lions'];

for (let i = 0; i < animals.length; i++) {
    console.log(`Index ${i}: ${animals[i]}`);
}

// now in reverse
for (let i = animals.length - 1; i >= 0; i--) {
    console.log(`Index ${i}: ${animals[i]}`);
}