const repeatString = function() {
let i = 0;
let greeting = 'hey';
let phrase = '';

do {
    phrase += greeting;
    i++;
} while(i < 3)

return phrase;
}

module.exports = repeatString
