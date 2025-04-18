const a = 11;
const b = 11;

console.log(a > b); // true/false
console.log(b > a); // true/false
console.log(10 >= "10"); // true/false
console.log(10 <= "10");

console.log(true == 1); // true/false
console.log(10 === "10"); // true/false

console.log(10 !== 10);
console.log(10 != "10"); // true/false

const res1 = {
  a: 10,
  b: 15,
  c: 30,
};

const res2 = {
  a: 10,
  b: 15,
  c: 30,
};

console.log(res1.a === res2.a);
console.log(res1 === res2);

const comparisonResult = res1.c > res2.c;
console.log(comparisonResult);

//false, 0, '', null, undefined or NaN

console.log(false == 0);
console.log(false == "");
console.log(false == null);
console.log(false == undefined);
console.log(false == NaN);

console.log("ааб" > "аая");
console.log("01" == 1);

const temperature = 10;

if (temperature >= 15) {
  console.log("Вєтровку");
}

if (temperature < 15) {
  console.log("кофту + вєтровку");
}

//

let hasTicket = null;

if (hasTicket) {
  console.log("пропустити");
}

if (hasTicket) {
  console.log("не пропускати");
} else {
  console.log("не пропускати");
}

// якщо 18 років то продаємо алкоголь, якщо менше не продаємо

const userAge = 21;

if (userAge >= 18) {
  console.log("You are welcome");
} else {
  console.log("Alcohol is not allowed");
}

if (userAge < 18) {
  console.log("Alcohol is not allowed");
} else {
  console.log("You are welcome");
}
