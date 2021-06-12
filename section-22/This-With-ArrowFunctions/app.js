// const person = {
//     firstName: 'Viggo',
//     lastName: 'Mortensen',
//     fullName: function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function() { 
        // console.log(this);
        return `${this.firstName} ${this.lastName}`
    },
    // Call fullName after 3 seconds
    // Arrow function needed to bypass default "Window" object for "this" keyword
    shoutName: function() {
        setTimeout( () => {
            console.log(this);
            console.log(this.fullName());
        }, 3000)
    } 
}