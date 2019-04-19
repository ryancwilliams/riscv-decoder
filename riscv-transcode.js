/**
 * Transcoder for RISC-V Instructions
 * 
 * @author ryancwilliams
 */

 /**
  * A Riscv Instruction data structure.
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

/**
 * A Riscv Instruction Type
 */
class RiscvInsType {

    /**
     * The name of the type
     */
    typename;

    /**
     * Creates a new Instruction Type
     * @param {*} typename The name of the type as a string
     */
    constructor(typename) {
        this.typename = typename;
    }
    
}

/**
 * The instruction types in RiscV
 */
const RV_INSTYPE = {
    R_TYPE: new RiscvInsType("R-type"),
    I_TYPE: new RiscvInsType("I-type"),
    S_TYPE: new RiscvInsType("S-type"),
    B_TYPE: new RiscvInsType("B-type"),
    U_TYPE: new RiscvInsType("U-type"),
    J_TYPE: new RiscvInsType("J-type")
}
