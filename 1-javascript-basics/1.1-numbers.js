/**
 * Numbers a computer uses internally represented as binary numbers.
 * Practically you won't use them most of the time but it's nice to have basic understanding
 * and not to be confused when you face them. Also, this knowledge is going to help you
 * understand limitations of basic mathematical operations like adding and subtracting.
 *
 * Get familiar with binary numbers:
 * https://www.mathsisfun.com/binary-number-system.html
 * https://www.youtube.com/watch?v=RrJXLdv1i74
 *
 * This video explains how a computer adds numbers:
 * https://www.youtube.com/watch?v=VBDoT8o4q00
 * Don't worry if you don't understand the whole video. Just make sure you've got the core idea of a processor
 * using binary system to add numbers.
 */

console.log('Exercise: 1');
/**
 * Convert binary numbers to decimals
 */
isTheSameNumber(0b1)(/** Put your answer into second brackets. */);
isTheSameNumber(0b10)();
isTheSameNumber(0b01110)();
isTheSameNumber(0b01010)();
console.log('\n');


console.log('Exercise: 2');
/**
 * Write your answer into second brackets if declared data inside the first ones belong to number type in JS.
 */
isItANumber(1)(/** Type true or false instead of the comment as your answer. */);
isItANumber('1')();
isItANumber('0.34234')();
isItANumber(-9342.4234)();
isItANumber(1e-5)();
isItANumber(0x12AB)();
isItANumber(0b1010)();
isItANumber(0o7777)();
isItANumber(Infinity)();
isItANumber(-Infinity)();
isItANumber(NaN)();
isItANumber('NaN')();

function isItANumber(variable) {
    return function (answer) {
        const variableName = convertToString(variable);

        if (typeof answer !== 'boolean') {
            console.error(`- You haven't answered if ${variableName} is a number.`);
            return;
        }

        if (typeof variable === 'number' && answer) {
            console.log(`+ ${variableName} is a number.`);
        } else {
            console.error(`- ${variableName} is not a number.`);
        }
    }
}

function convertToString(variable) {
    if (typeof variable === 'string') {
        return `"${variable}"`;
    } else {
        return variable.toString();
    }
}

function isTheSameNumber(number1) {
    return function (number2) {
        if (typeof number2 !== 'number') {
            console.error('- The answer is not a number.');
        } else if (number1 !== number2) {
            console.error('- Numbers are different. Try again.');
        } else {
            console.log('+ Congrats! The answer is correct.');
        }
    }
}
