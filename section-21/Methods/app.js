// object with methods
const myMath = {
    PI: 3.14159,
    multiply : function(x, y) {
        return x * y;
    },
    divide(x, y) {
        return x / y;
    },
    square(x) {
        return x ** 2;
    },
    cube: function(x) {
        return x ** 3;
    }
}

const square = {
    area : function(side) {
        return side ** 2;
    },
    perimeter(side) {
        return side * 4;
    }
}