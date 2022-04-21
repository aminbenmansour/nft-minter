const { readFileSync, writeFileSync, readdirSync, rmSync, existsSync, mkdirSync } = require('fs');
const sharp = require('sharp');

const template = `
    <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- bg -->
        <!-- head -->
        <!-- hair -->
        <!-- eyes -->
        <!-- nose -->
        <!-- mouth -->
        <!-- beard -->
    </svg>
`
// get a random number
function randInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

// get a random elemnt from array
function randElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}