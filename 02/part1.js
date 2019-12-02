import fs from "fs";

const input = fs.readFileSync("./input.txt");

let intcodes = input
  .toString()
  .split(",")
  .map(Number);

intcodes[1] = 12;
intcodes[2] = 2;
const processIntCodes = data => {
  let position = 0;
  while (data[position] !== 99) {
    const opcode = data[position];
    const input1 = data[data[position + 1]];
    const input2 = data[data[position + 2]];
    const address = data[position + 3];

    if (opcode === 1) {
      data[output] = input1 + input2;
    } else if (opcode === 2) {
      data[output] = input1 * input2;
    }

    position += 4;
  }
  return data;
};

console.log(processIntCodes(intcodes));
