// Keyword "this"
const dog = {
    name: 'Millie',
    color: 'blue',
    bark() {
        console.log(`The ${this.color} dog ${this.name} goes Woof Woof!`);
    }
}