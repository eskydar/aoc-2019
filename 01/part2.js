import fs from "fs";

const input = fs.readFileSync("./input.txt");

const modules = input
  .toString()
  .split(/\r?\n/)
  .filter(Number);

const calculateFuel = mass => {
  const fuel = Math.floor(mass / 3) - 2;
  return fuel <= 0 ? 0 : fuel + calculateFuel(fuel);
};
const fuelRequired = modules.reduce(
  (total, mass) => total + calculateFuel(mass),
  0
);

console.log(fuelRequired);
