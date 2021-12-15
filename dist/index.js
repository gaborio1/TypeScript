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
// ELEMENT TYPES CAN BE FLEXIBLE (any) OR STRICT (SPECIFIED)
const hobbies = ["sports", "cooking"];
// const hobbies2: string[]; // const VARIABLES MUST BE INITIALISED
let hobbies2; // ARRAY OF STRINGS 
hobbies2 = ["sports", "cooking"];
for (const hobby of hobbies2) {
    console.log(hobby.toUpperCase()); // CAN CALL STRING METHODS
    // console.log(hobby.map());    !!! ERROR AS map IS ARRAY METHOD !!!
}
// ===== TUPLE =====
// IF WE KNOW THE NUMBER OF TYPE OF VALUES IN ADVANCE
//  ARRAY:
// UNION TYPE MIGHT HOLD STRINGS OR NUMBERS BUT WE CAN MUTATE THIS ARRAY
const role = [2, "author"]; // => const role: (string | number)[]
//  TUPLE: 
// DEFINING EXACT STRUCTURE OF ARRAY, [0] MUST BE NUMBER AND [1] MUST BE STRING
// LENGTH WILL BE ENFORCED EXCEPT FOR push()
// !!! WE CAN STILL role2.push("admin") !!!
let role2;
// ===== ENUM =====
// IDENTIFIERS, GLOBAL CONSTANTS THAT WE WANT TO REPRESENT AS NUMBERS ASSIGNING WITH A HUMAN READABLE LABEL (AUTOMATICALLY ENUMARATED GLOBAL CONSTANT IDENTIFIERS)
//  USE THEM IN TYPE ASSIGNMENTS, IF STATEMENTS
// WITH JS:
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
// INSTEAD:
// DEFAULT STARTS WITH 0;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
; // 0, 1, 2
// CUSTOM STARTS WITH OTHER NUMBER:
var Role2;
(function (Role2) {
    Role2[Role2["ADMIN"] = 5] = "ADMIN";
    Role2[Role2["READ_ONLY"] = 6] = "READ_ONLY";
    Role2[Role2["AUTHOR"] = 7] = "AUTHOR";
})(Role2 || (Role2 = {}));
; // 5, 5, 7
//  OR ANY VALUE:
var Role3;
(function (Role3) {
    Role3[Role3["ADMIN"] = 5] = "ADMIN";
    Role3[Role3["READ_ONLY"] = 876] = "READ_ONLY";
    Role3["AUTHOR"] = "author";
})(Role3 || (Role3 = {}));
; // 5, 876, "author"
const person2 = {
    name: "john",
    role: Role.ADMIN
};
if (person2.role === Role.ADMIN) {
    console.log("is admin");
}
// ===== ANY =====
// TS WILL NOT COMPLAIN, TRY NOT TO USE
// USE IT AS A FALLBACK WHEN WE DON'T KNOW THE TYPES IN ADVANCE
// ===== UNION =====
// MAKE combine WORK WITH BOTH NUMBERS AND STRINGS
const combine = (input1, input2) => {
    const result = input1 + input2;
    return result;
};
const combinedAges = combine(10, 5);
console.log(combinedAges); // 15 AS EXPECTED
// const combinedNames = combinedAges("hello", "world"); // !!! ERROR !!!
// ===== LITERAL =====
// BASED ON A CORE TYPE, BUT WITH A SPECIFIC VALUE: resultConversion: "as-number" | "as-string"
// const combine4 = (
//     input1: number | string,
//     input2: number | string,
//     resultConversion: "as-number" | "as-string"
// ) =>
const combine2 = (input1, input2) => {
    let result;
    // MIGHT NEED A RUNTIME TYPE CHECK:
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2; // MAKE SURE INPUTS ARE NUMBERS (ADD)
    }
    else {
        result = input1.toString() + input2.toString(); // INPUTS ARE STRINGS (CONCAT)
    }
    return result;
};
console.log(combine2(10, 5)); // 15
console.log(combine2("hello", "world")); // "helloworld"
// ALLOW / FORCE CONVERSION FROM number =>  string / string => number TO ALLOW STRING INPUTS RETURNED AS NUMBER
const combine3 = (input1, input2, resultConversion) => {
    let result;
    // RUNTIME TYPE CHECK:
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2; // MAKE SURE INPUTS ARE NUMBERS (ADD)
    }
    else {
        result = input1.toString() + input2.toString(); // INPUTS ARE STRINGS (CONCAT)
    }
    if (resultConversion === "as-number") {
        return +result;
        // return parseFloat(result);
    }
    else {
        return result.toString();
    }
    return result;
};
// OR:
const combine4 = (input1, input2, resultConversion // ALLOW 2 EXACT VALUES ONLY AS TYPE !!!
) => {
    let result;
    // RUNTIME TYPE CHECK:
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
        result = +input1 + +input2; // MAKE SURE INPUTS ARE NUMBERS (ADD)
    }
    else {
        result = input1.toString() + input2.toString(); // INPUTS ARE STRINGS (CONCAT)
    }
    // if (resultConversion === "as-number") {
    //     return +result;
    //     // return parseFloat(result);
    // } else {
    //     return result.toString();
    // }
    return result;
};
console.log(combine4(10, 5, "as-number")); // 15
console.log(combine4(10, 5, "as-string")); // "15"
console.log(combine4("hello", "world", "as-string")); // "helloworld"
const combine5 = (input1, // USE Combinable TYPE ALIAS
input2, resultConversion // USE ConversionDescriptor TYPE ALIAS
) => {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
        result = +input1 + +input2; // MAKE SURE INPUTS ARE NUMBERS (ADD)
    }
    else {
        result = input1.toString() + input2.toString(); // INPUTS ARE STRINGS (CONCAT)
    }
    return result;
};
console.log(combine5(10, 5, "as-number")); // 15
console.log(combine5(10, 5, "as-string")); // "15"
console.log(combine5("hello", "world", "as-string")); // "helloworld"
// ===== FUNCTION RETURN TYPES AND VOID =====
// (NO RETURN STATEMENT: void / RETURN WITH NO VALUE: undefined)
const add2 = (n1, n2) => {
    return n1 + n2;
};
// LET TS INFER RETURN TYPE UNLESS WE EXPLICITELY WANT TO DEFINE IT !!!
// printResult2 IS NOR RETURNING ANYTHING SO ITS RETURN TYPE IS: void, WE DONT HAVE TO SPECIFY IT, TS INFERENCE WILL DO IT FOR US: const printResult2 = (num: number): void =>
const printResult2 = (num) => {
    console.log("Result: " + num);
};
printResult2(add2(3, 8)); // 11
console.log(printResult2(add2(3, 8))); // !!! undefined !!! BECAUSE printResult2 RETURNS undefined !!!
// IN TS FUNCTIONS ARE NOT ALLOWED TO RETURN undefided, TECHNICALLY, THEY DO, SEE ABOVE printResult2
// WITH void WE MAKE IT CLEAR THAT OUR FUNCTION DOES NOT HAVE A RETURN STATEMENT
// IF WE USED undefined, TS WOULD EXPECT TO USE A RETURN STATEMENT WITHOUT RETURNING A VALUE:
// const printResult3 = (num: number): undefined => { 
//     console.log("Result: " + num);
//     return;
// }
// ===== FUNCTION ===== (a: number, b: number) => number;
// DESCRIBE A FUNCTION, ITS PARAMETER TYPES AND RETURN VALUE
let combineValues;
combineValues = add2; // STORE FUNCTION IN VARIABLE
console.log(combineValues(8, 9)); // EXECUTE VARIABLE AS FUNCTION
combineValues = 5; // combineValues IS TYPE: any, 
console.log(combineValues(8, 9)); // WE CAN COMPILE BUT WILL GET AN ERROR AT RUNTIME !!!
// NOW, IT CAN ONLY BE A FUNCTION, BUT ANY FUNCTION WHICH IS STILL NOT IDEAL:
let combineValues2;
combineValues2 = printResult2;
console.log(combineValues2(8, 9)); // WE STORED THE WRONG FUNCTION SO WE WILL GET undefined 
// BE MORE PRECISE ABOUT HOW THE FUNCTION SHOULD LOOK LIKE:
let combineValues3;
combineValues3 = add2; // OK 
combineValues3 = printResult; // ERROR: printResult DOES NOT MATCH PRE-DEFINED f DESCRIPTION
//  2 06 55
