import fs from "fs";

const input = fs.readFileSync("./input.txt");

let intcodes = input
  .toString()
  .split(",")
  .map(Number);

const processIntCodes = (data, output = 19690720) => {
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      const memory = [...intcodes];
      let instructionPointer = 0;
      memory[1] = noun;
      memory[2] = verb;

      while (memory[instructionPointer] !== 99) {
        const opcode = memory[instructionPointer];
        const input1 = memory[memory[instructionPointer + 1]];
        const input2 = memory[memory[instructionPointer + 2]];
        const address = memory[instructionPointer + 3];

        if(opcode === 1) {
          memory[address] = input1 + input2;
        } else if (opcode === 2) {
          memory[address] = input1 * input2;
        }

        instructionPointer += 4;
      }

      if (memory[0] === output) {
        return 100 * noun + verb;
      }
    }
  }
};

console.log(processIntCodes(intcodes));
