console.log("Hello world!!");
console.log("");

// typeof повертає ти данних який був переданий

const num = 170_590;
const pi = 3.14;
const minusPi = -3.14;

console.log(minusPi);
console.log(170_590);
console.log(10 / 0);
console.log("a" * 2);

// string (рядок)
const str_1 = "Hello, world!!!";
const str_2 = "\n tests \n asfasf";

console.log(str_2);
console.log(" '' ");
console.log("Hello, world!!!");
const str_3 = `
 test 
${str_1}
 test
`;

const coffeeHeader = (coffee) => `//h4[text()= "${coffee}"]`;

console.log(coffeeHeader("Mochiato"));
console.log(str_3);
// string templating (шаблони рядків)

// boolean / логічний
let isTrue = true;
let isFalse = false;

// undefine
let undef;

console.log(undef);
console.log(typeof undef);

// null
let n = null;
console.log(n);
console.log(typeof n);

// symbol
let sym = Symbol("some description 1215sfasfa");
console.log(sym);
console.log(typeof sym);

// BigInt (ES11)
let someBigInt = 123456789012345678901234567890n;
let someBigNumber = 123456789012345678901234567890;

console.log(someBigInt);
console.log(typeof someBigInt);

// object 
const obj = { x: 'qa dojo', xasfa: 'asfaf', num: 1124152  };
const some = obj;
obj.x = 'this is qa dojo';

console.log(obj);
console.log(some);

// массиви/array
const someArray = [1, 2, 3, 4, 'sataswfa', 215215, 'asfa'];
console.log(someArray[6]);

