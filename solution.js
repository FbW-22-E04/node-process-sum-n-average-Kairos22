// 1.

const userInput = process.argv.slice(2);
// console.log(process.argv);
let result = 0;

for (let i = 1; i < userInput.length; i++) {
  if (isNaN(userInput[i])) {
    console.log(
      `Sorry, the argument ${userInput[i]} is not a number, please try again`
    );
    return;
  }

  result = result + Number(userInput[i]);
}
// console.log(result);

// 2.

let avarge = result / (userInput.length - 1);
// console.log(avarge);

if (userInput[0] === "sum") {
  console.log(result);
} else if (userInput[0] === "avg") {
  console.log(avarge);
} else {
  console.log(
    'I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)'
  );
}
