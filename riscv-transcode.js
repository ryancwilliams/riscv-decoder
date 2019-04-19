/**
 * Transcoder for RISC-V Instructions
 * 
 * @author ryancwilliams
 */

class RiscvInstruction {

    /**
     * The Binary instruction.
     */
    instruction;
    /**
     * Register Source 1
     */
    rs1;
    /**
     * Register Source 2
     */
    rs2;
    /**
     * Register Destination
     */
    rd;
    /**
     * The opcode
     */
    opcode;
    /**
     * The value for funct3
     */
    funct3;
    /**
     * The value for funct 7
     */
    funct7;
    /**
     * The immediate value
     */
    imm;

}
