/**
 * A library for binary manipulation.
 * 
 * @author ryancwilliams
 */

/**
 * A binary number
 */
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

    /**
     * Gets the bits between the indexes as a binary string.
     * @param {*} index_high The highest bit
     * @param {*} index_low The lowest bit
     */
    getBits(index_high, index_low) {
        //Get Length
        let length = this.bits.length;
        //Convert bit indexes to string indexes
        let iHI = length - index_high - 1; //Subtract 1 because substring is exclusive
        let iLOW = length - index_low;

        return this.bits.substring(iHI, iLOW);
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
