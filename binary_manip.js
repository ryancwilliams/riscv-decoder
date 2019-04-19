/**
 * A library for binary manipulation.
 * 
 * @author ryancwilliams
 */

/**
 * A binary number
 */
class binary {

    /**
     * The number as a string of binary bits
     */
    bits;

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

    Console.assert(num instanceof Number);

    let binary = new binary();
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

    Console.assert(!Number.isNaN(num));

    return binaryFromNumber(num);
}

/**
 * Creates a new binary from a decimal string.
 * 
 * @param {*} hex The decimal string.
 */
function binaryFromHex(dec) {
    let num = Number.parseInt(dec, 10);

    Console.assert(!Number.isNaN(num));

    return binaryFromNumber(num);
}
