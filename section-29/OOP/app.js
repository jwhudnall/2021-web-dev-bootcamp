function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    }
    color.hex = function () {
        // Converts RGB into Hex color
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color;
}

const firstColor = makeColor(35, 255, 150);

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.rgb = function () {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    }
}

const color1 = Color(255, 0, 0);
console.log('This is color 1: ', color1); // undefined

const color2 = new Color(255, 0, 0);
