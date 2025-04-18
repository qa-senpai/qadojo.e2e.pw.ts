//  Напишіть програму, яка визначає, чи дане число є додатним чи ні.

function isPositive(number) {
  if (number > 0) {
    return true;
  } else if (number === 0) {
    //   throw Error("number is zero");
  } else {
    return false;
  }
}

isPositive(151);
isPositive(10);

const number = 10;

if (number > 0) {
  console.log(true);
} else if (number === 0) {
  //   throw Error("number is zero");
} else {
  console.log(false);
}

console.log(isPositive(12451));
console.log(isPositive(0));
console.log(isPositive(-124551));

const num = 10;

if (num > 0) {
  console.log(true);
} else if (num === 0) {
  //   throw Error("number is zero");
} else {
  console.log(false);
}
