let size = 10;
let chess = "";

for (let row = 0; row < size; row++) {
  for (let col = 0; col < size; col++) {
    if ((row + col) % 2 === 0) {
      chess += " ";
    } else {
      chess += "#";
    }
  }
  chess += "\n";
}

console.log(chess);