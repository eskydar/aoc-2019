import fs from "fs";

const input = fs.readFileSync("./input.txt");

const modules = input
  .toString()
  .split(/\r?\n/)
  .filter(Number);

const calculateFuel = mass => Math.floor(mass / 3) - 2;
const fuelRequired = modules.reduce(
  (total, mass) => total + calculateFuel(mass),
  0
);

console.log(fuelRequired);
