// 1-

const num = 123;

console.log(num.toString()); // 123

// 2-

const num1 = "456";

console.log(parseInt(num1)); // 456

// 3-

const num2 = "78.9";
console.log(parseFloat(num2)); // 78.9;

// 4-

console.log(5 + "3"); // 53

// 5-

const True = 1;
const False = 0;

console.log(Boolean(True)); //  true
console.log(Boolean(False)); //    false

// 6-

const str = "24";
const num3 = +str;
console.log(num3); //   24

// 7-

const trueValue = true;
const falseValue = false;

const trueToNumber = +trueValue;
const falseToNumber = +falseValue;

console.log(trueToNumber); //  1
console.log(falseToNumber); // 0

// 8-

const nullValue = null;

const nullToNumber = +nullValue;

console.log(nullToNumber); //  0
