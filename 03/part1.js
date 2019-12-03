import fs from "fs";

const input = fs.readFileSync("./input.txt");

const wires = input
  .toString()
  .split("\n")
  .map(wire => wire.trim().split(","));

const createWireMap = wire => {
  const positions = [];
  const position = { x: 0, y: 0 };

  for (let i = 0; i < wire.length; i++) {
    const direction = wire[i][0];
    const distance = Number(wire[i].slice(1));

    for (let step = 1; step <= distance; step++) {
      switch (direction) {
        case "L":
          position.x += -1;
          break;
        case "R":
          position.x += 1;
          break;
        case "U":
          position.y += -1;
          break;
        case "D":
          position.y += 1;
          break;
      }

      positions.push(`${position.x}, ${position.y}`);
    }
  }

  return positions;
};

const wire1Positions = createWireMap(wires[0]);
const wire2Positions = createWireMap(wires[1]);

console.log(
  wire2Positions
    .filter(position => wire1Positions.includes(position))
    .map(position => position.split(",").map(Number))
    .map(([x, y]) => Math.abs(x) + Math.abs(y))
    .sort((a, b) => a - b)[0]
);
