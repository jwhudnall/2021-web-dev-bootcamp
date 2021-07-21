String.prototype.yell = function() {
    return `${this.toUpperCase()}!!!`
}

class Person {
    constructor(first, last, age, gender, interests) {
        this.name = {
            'first': first,
            'last': last,
        };
        this.age = age;
        this.gender = gender;
        this.interests = [interests];
    }
}

const james = new Person('James','Hudnall',34,'male',['Learning','Working Out']);

console.log(james.name.first); // 'James'

Person.prototype.isCool = true; // Adds method to "Person" class; retroactive to 'James'

console.log(james.isCool); // true