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
    J_TYPE: new RiscvInsType("J-type"),
    OTHER_TYPE: new RiscvInsType("Other-Type")
}

/**
 * A Riscv Opcode
 */
class RiscvOpcode {

    /**
     * The opcode for the instruction.
     */
    opcode;

    /**
     * The instruction type.
     */
    instype;

    /**
     * Creates a new Riscv Opcode
     * @param {*} opcode The Opcode as a number
     * @param {*} instype The instruction type
     */
    constructor(opcode, instype){
        this.opcode = opcode;
        this.instype = instype;
    }

}

/**
 * The Opcodes in RiscV
 */
const RV_OPCODES = {
    LOAD: new RiscvOpcode(Number.parseInt("0000011", 2), RV_INSTYPE.I_TYPE),
    STORE: new RiscvOpcode(Number.parseInt("0100011", 2), RV_INSTYPE.S_TYPE),
    BRANCH: new RiscvOpcode(Number.parseInt("1100011", 2), RV_INSTYPE.B_TYPE),
    JALR: new RiscvOpcode(Number.parseInt("1100111", 2), RV_INSTYPE.I_TYPE),
    MISC_MEM: new RiscvOpcode(Number.parseInt("0001111", 2), RV_INSTYPE.OTHER_TYPE),
    JAL: new RiscvOpcode(Number.parseInt("1101111", 2), RV_INSTYPE.J_TYPE),
    OP_IMM: new RiscvOpcode(Number.parseInt("0010011", 2), RV_INSTYPE.I_TYPE),
    OP: new RiscvOpcode(Number.parseInt("0110011", 2), RV_INSTYPE.R_TYPE),
    SYSTEM: new RiscvOpcode(Number.parseInt("1110011", 2), RV_INSTYPE.OTHER_TYPE),
    AUIPC: new RiscvOpcode(Number.parseInt("0010111", 2), RV_INSTYPE.U_TYPE),
    LUI: new RiscvOpcode(Number.parseInt("0110111", 2), RV_INSTYPE.U_TYPE),
}
