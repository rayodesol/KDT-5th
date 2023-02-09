// let str = "124";
// console.log(typeof str);
// console.log(str / 2); // 에러가 생겨야 되는데 JS는 마음대로 형변환

// let num = Number(str);
// console.log(typeof num);
// console.log(num / 2);

// console.log(Number("abcd"));

// let num = 123;
// let num2 = 456;

// let str1 = String(num);
// let str2 = String(num2);

// console.log(str1 + str2); // 문자열이므로 그대로 옆에 붙음

console.log(1, Boolean(1));
console.log("송민선", Boolean("송민선"));
console.log(0, Boolean(0));
console.log(-1, Boolean(-1));
console.log("", Boolean(""));
console.log(" ", Boolean(" "));
console.log(undefined, Boolean(undefined));
console.log(null, Boolean(null));
console.log(NaN, Boolean(NaN));
