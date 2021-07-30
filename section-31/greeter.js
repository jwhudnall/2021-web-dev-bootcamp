
// process.argv collects user input from command line (starting at index 2)
 const args = process.argv.slice(2);

for(let arg of args) {
    console.log(`Hi, ${arg}`)
}