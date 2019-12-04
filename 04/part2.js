const input = "272091-815432";
const passwordIsValid = pw => {
  let twoAdjacent = false;
  let onlyIncreasing = true;

  for (let i = 0; i < pw.length; i++) {
    const previousChar = pw[i - 1];
    const nextChar = pw[i + 1];
    const currChar = pw[i];
    const nextNextChar = pw[i + 2];
    if (
      previousChar !== currChar &&
      currChar === nextChar &&
      nextChar !== nextNextChar
    ) {
      twoAdjacent = true;
    }

    if (Number(currChar) > Number(nextChar)) {
      onlyIncreasing = false;
    }
  }

  return twoAdjacent && onlyIncreasing;
};

const range = input.split("-").map(Number);

const validPasswords = [];

for (let i = range[0]; i <= range[1]; i++) {
  if (passwordIsValid(String(i))) {
    validPasswords.push(i);
  }
}

console.log(validPasswords.length);
