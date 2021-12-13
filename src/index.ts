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
const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + n1 + n2);  // Result is: 53
        console.log(phrase, result);    // Result is:  8
    } else {
        return result;
    }
}

const number1 = 5;
const number2 = 3;
const printResult = true;
const resultPhrase = "Result is: ";

// const result = add(number1, number2, printResult);
// console.log(result);   // 8

add(number1, number2, printResult, resultPhrase);

// VID: 1 03 32