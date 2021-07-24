// function makeColor(r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function () {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     }
//     color.hex = function () {
//         // Converts RGB into Hex color
//         const { r, g, b } = this;
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }
//     return color;
// }

// const firstColor = makeColor(35, 255, 150);

// // Constructor Function
// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// // Add .rbg method to Colors __proto__ object
// Color.prototype.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
// }

// Color.prototype.hex = function () {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// Color.prototype.rgba = function (a=1.0) {
//     const { r, g, b } = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`;
// }

// const color1 = new Color(40, 250, 60);
// const color2 = new Color(0, 0, 0);

// console.log(color1.hex === color2.hex) // true. Both instances .hex references the same __proto__

// Classes
class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb() {
        const { r, g, b } = this; // Destructure r, g, b from "this"
        return `rgb(${this.innerRGB()})`;
    }
    hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    rgba(a=1.0) {
        const { r, g, b } = this;
        return `rgba(${this.innerRGB()}, ${a})`;
    }
}

const red = new Color(255, 67, 89, 'Tomato');
const white = new Color(255, 255, 255, 'White');