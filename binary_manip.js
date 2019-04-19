/**
 * A library for binary manipulation.
 * 
 * @author ryancwilliams
 */

/**
 * A binary number
 */
class binary {
class Binary {

    /**
     * The number as a string of binary bits
     */
    bits;

    constructor(){
        //Do nothing
    }

    /**
     * Gets this binary as a number. 
     */
    getAsNumber() {
        let num = Number.parseInt(this.bits, 2);
        return num;
    }
}

/**
 * Creates a new binary from a Number object.
 * 
 * @param {*} num the Number object.
 */
function binaryFromNumber(num) {

    console.assert(typeof num == "number");

    let binary = new Binary();
    binary.bits = num.toString(2);
    return binary;
}

/**
 * Creates a new binary from a hex string.
 * 
 * @param {*} hex The hex string.
 */
function binaryFromHex(hex) {
    let num = Number.parseInt(hex, 16);

    console.assert(!Number.isNaN(num));

    return binaryFromNumber(num);
}

/**
 * Creates a new binary from a decimal string.
 * 
 * @param {*} hex The decimal string.
 */
function binaryFromDec(dec) {
    let num = Number.parseInt(dec, 10);

    console.assert(!Number.isNaN(num));

    return binaryFromNumber(num);
}
