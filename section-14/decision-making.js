// == vs ===
// == will "force" type convergence
// === checks for equality of value and type
1 == '1'; // true
null == undefined; // true
// vs
1 === '1'; // false

console.log("Hello!"); // "Hello!" (in console)
alert("This is a popup!"); // Displays alert in browser popup
let number = prompt('Enter a number: '); // stores user input in variable 'number'

parseInt('31'); // 31 (int of type number)
parseFloat('31.42'); // 31.42 (float of type number)