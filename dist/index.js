"use strict";
// let id: number = 5;
// console.log("id: ", id);
// ==================== TYPES ===================== 
// ===== number, boolean, string =====
// const add = (n1, n2) => { // DEFAULT TYPE: any
//     return n1 + n2;
// }
// const number1 = "5";
// const number2 = 3;
// const result = add(number1, number2);
// console.log(result);    // "53" WILL BE CONCATINATING STRINGS
// JS FIX:
// const add = (n1, n2) => {
//     if (typeof n1 !== "number" || typeof n2 !== "number") {
//         throw new Error("incorrect input!");
//     } else {
//         return n1 + n2;
//     }
// }
// ADD EXPLICIT TYPE ASSIGNMENTS TO PARAMETERS
const add = (n1, n2, showResult, phrase) => {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + n1 + n2); // Result is: 53
        console.log(phrase, result); // Result is:  8
    }
    else {
        return result;
    }
};
// NO ASSIGNMENT HERE AS TS HAS TYPE INFERENCE:
const number1 = 5; // INFERRED TO "number"
// let number1 = 5;
const number2 = 3;
const printResult = true; // INFERRED TO "boolean"
const resultPhrase = "Result is: "; // INFERRED TO "string"
// BUT:
let number3; // SPECIFY TYPE WHEN INITIALISING
// number3 = "7";          // Type 'string' is not assignable to type 'number' !!!
// let number4;            // UNLESS WE WANG "any" TYPE
// const result = add(number1, number2, printResult);
// console.log(result);   // 8
add(number1, number2, printResult, resultPhrase);
// ===== OBJECT =====
// const person = {
//     name: "max",    // name: string:
//     age: 30         // age: number:
// }
//  GENERIC OBJECT TYPE INFERRED BY TS WITH key - type PAIRS WITH SEMICOLONS:
// const person: {
//     name: string;
//     age: number;
// }
// const person: object = {
//     name: "max",
//     age: 30
// }
// GENERIC OBJECT TYPE INFERRED BY TS WITH key - type PAIRS WITH SEMICOLONS:
// const person: object
// SPECIALISED OBJECT TYPE WITH INFO ABOUT ITS STRUCTURE:
const person = {
    name: "max",
    age: 30
};
console.log(person.name);
// ===== ARRAY =====
// 1 16 00
