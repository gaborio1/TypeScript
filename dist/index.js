"use strict";
// ==================================================================
// TypeScript Crash Course 2021
// ==================================================================
// https://www.youtube.com/watch?v=BCg4U1FzODs&ab_channel=TraversyMedia
// ==================================================================
//  ADDITIONAL FEATURES TO JS INCL. STATIC TYPES
//  USING TYPES IS COMPLETELY OPTIONAL
//  COMPILES DOWN TO REGULAR JS
//  FRONT END OR BACKEND WITH NODE.JS
//  INCLUDES  MOST FEATURES FROM ES6, ES7
//  TYPES FROM THIRD PARTY LIBRARIES CAN BE ADDED WITH TYPE DEFINITIONS
//  DYNAMICALLY TYPED: TYPES ARE ASSOCIATED WITH RUN-TIME VALUES AND NOT NAMED EXPLICITLY IN CODE
//  JS, PYTHON, RUBY, PHP
//  STATICALLY TYPED: EXPLICITELY ASSIGN TYPES TO VARIABLES, FUNC. PARAMETERS, RETURN VALUES, ETC
//  JAVA, C, C++, RUST, GO
//  COMPILING TS:
// .ts and .tsx (JSX) EXTENSIONS
// TSC IS USED TO COMPILE TS DOWN TO JS
// CAN WATCH FILES AND REPORT ERRORS AT COMPILE TIME
//  MANY TOOLS INCLUDE TS COMPILATION BY DEFAULT
//  MOST IDE'S HAVE GREAT SUPPORT FOR TS
//  THE tsconfig.json FILE IS USED TO CONGIGURE HOW TS WORKS
// !!! tsconfig.json COMPILER OPTIONS: "target": "es2018" (es2017 OR LATER) FOR Object.entries TO WORK!!!
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// BASIC TYPES
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
let id = 5;
let company = "Traversy Media";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3]; // ARRAY THAT CAN ONLY CONTAIN NUMBERS
let arr = [1, true, "hello"]; // ARRAY CAN HOLD VALUES OF ANY TYPE
// ❗️❗️❗️  CHECK FOR NULL OR EMPTY ARRY ORDER ❗️❗️❗️
const sumArray = (array) => {
    // ❗️❗️❗️ Object is possibly 'null'.ts(2531) ❗️❗️❗️
    // if (array.length <= 2 || array === null) return 0; 
    if (array === null || array.length <= 2)
        return 0;
    // OR:
    // if (!array || array.length <= 1) return 0;
    return array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((a, b) => a + b);
};
// RETURN 0 IF ARRAY HAS 0, 1 OR 2 ELEMENTS
// OTHERWISE:
//    SORT NUMERICALLY
//    SLICE OUT MIDDLE ELEMENTS
//    GET SUM
// console.log(sumArray([6, 2, 1, 8, 10]));
// console.log(sumArray([]));
//============= OTHER CODEWARS SOLUTIONS: =============
// ❗️❗️❗️ if (!array || array.length <= 1) return 0; ❗️❗️❗️
function sumArray2(array) {
    if (!array || array.length <= 1)
        return 0;
    return array.sort((a, b) => a - b).slice(1, -1).reduce((p, n) => p + n, 0);
}
function sumArray3(a) {
    return (a === null) ? 0 : a.sort((a, b) => a - b).slice(1, -1).reduce((a, b) => a + b, 0);
}
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
//  ===== TUPLE =====
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
//  SPECIFY THE EXACT TYPES AT EVERY INDEX INSIDE OF THE ARRAY
let personArr = [1, "john", true];
//  TUPLE ARRAY (ARRAY OF TUPLES)
let employee;
employee = [[1, "brad"], [2, "dave"], [3, "steve"]];
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
//  ===== UNION =====
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
//  VARIABLE TO HOLD MORE THAN ONE TYPE
let pid = 33;
// pid = 33;
pid = "33";
pid = undefined;
pid = null;
pid = true;
pid = Symbol('foo');
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// ===== ENUM (ENUMERATED) =====
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// SET OF NAMED CONSTANTS (NUMERIC BY DEFAULT OR STRING) 
var direction1;
(function (direction1) {
    direction1[direction1["up"] = 1] = "up";
    direction1[direction1["down"] = 2] = "down";
    direction1[direction1["left"] = 3] = "left";
    direction1[direction1["right"] = 4] = "right";
})(direction1 || (direction1 = {}));
// IF WE CHANGE up = 1, THEN INDICES WILL START ON 1, 2, 3 ETC..
console.log(direction1.up); // 0
var direction2;
(function (direction2) {
    direction2["up"] = "up";
    direction2["down"] = "down";
    direction2["left"] = "left";
    direction2["right"] = "rigth";
})(direction2 || (direction2 = {}));
console.log(direction2.left); // left
//  CODEWARS EXAMPLE: CHECK COUPON 7KYU
var months;
(function (months) {
    months[months["January"] = 1] = "January";
    months[months["February"] = 2] = "February";
    months[months["March"] = 3] = "March";
    months[months["April"] = 4] = "April";
    months[months["May"] = 5] = "May";
    months[months["June"] = 6] = "June";
    months[months["July"] = 7] = "July";
    months[months["August"] = 8] = "August";
    months[months["September"] = 9] = "September";
    months[months["October"] = 10] = "October";
    months[months["November"] = 11] = "November";
    months[months["December"] = 12] = "December";
})(months || (months = {})); // ❗️❗️❗️ HAVE TO USE ANY, string WILL THROW AN ERROR WHEN ACCESSING VALUE BY KEY (months[currMonth]) ❗️❗️❗️
const currentMonth = "February";
const currMonthIdx = months[currentMonth]; // 2
//  CODEWARS EXAMPLE:   SWITCH IT UP - number between 0-9, return it in words.
function switchItUp2(intNumber) {
    let out;
    (function (out) {
        out[out["Zero"] = 0] = "Zero";
        out[out["One"] = 1] = "One";
        out[out["Two"] = 2] = "Two";
        out[out["Three"] = 3] = "Three";
        out[out["Four"] = 4] = "Four";
        out[out["Five"] = 5] = "Five";
        out[out["Six"] = 6] = "Six";
        out[out["Seven"] = 7] = "Seven";
        out[out["Eight"] = 8] = "Eight";
        out[out["Nine"] = 9] = "Nine";
        out[out["Ten"] = 10] = "Ten";
    })(out || (out = {}));
    ;
    return out[intNumber];
}
// CODEWARS EXAMPLE: I LOVE U
const howMuchILoveYou = (petals) => {
    let phrases;
    (function (phrases) {
        phrases[phrases["I love you"] = 1] = "I love you";
        phrases[phrases["a little"] = 2] = "a little";
        phrases[phrases["a lot"] = 3] = "a lot";
        phrases[phrases["passionately"] = 4] = "passionately";
        phrases[phrases["madly"] = 5] = "madly";
        phrases[phrases["not at all"] = 6] = "not at all";
    })(phrases || (phrases = {}));
    if (petals <= 6)
        return phrases[petals];
    if (petals > 6 && petals % 6)
        return phrases[petals % 6];
    return phrases[6];
};
//  CHANGE DEFAULT VALUE TO 1
//  1-6: CORRESPONDING KEY 
//  GREATER THAN 6 AND NOT DIVISIBLE BY 6: KEY = REMAINDER 
//  OTHERWISE, IF DIVISIBLE BY 6: KEY = 6
// console.log(howMuchILoveYou(1)); 
// console.log(howMuchILoveYou(4));
// console.log(howMuchILoveYou(6));
// console.log(howMuchILoveYou(7));
// console.log(howMuchILoveYou(12));
/*
https://stackoverflow.com/questions/50417254/dynamically-access-enum-in-typescript-by-key

enum MyEnum{
    Option1,
    Option2,
    Option3
}


string x = 'Option1';

MyEnum[x] throws an error:

Type string is not assignable to type MyEnum

however: MyEnum['Option1'] works.

I need to use MyEnum[x] though (in a method that returns a MyEnum), where x is a calculated value that results in one of the valid enum options, how do I go about it?

❗️❗️❗️ There are two elegant ways to achieve this 🚀 ❗️❗️❗️

⭐️ 1st way: just simply turn off the type checking for the next line, which is similar to asserting the type of MyEnum to <any> as done in the @annepic 's answer

// @ts-ignore
MyEnum[x]
⭐️ 2nd: If u still want to keep the powerful typechecking feature of TS, choose this

MyEnum[x as keyof typeof MyEnum]
typeof MyEnum will create an interface that represents the MyEnum object behind the scene and keyof will return a union of string literals, each one is the key in the MyEnum object (in other words, keyof will return a list of keys of a given object/class).
*/
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// ===== OBJECTS =====
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// STEP 1:
// ADD TYPES TO EACH VALUE:
const user = {
    id: 1,
    name: "alex"
};
const user2 = {
    id: 1,
    name: "eddie"
};
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// ===== TYPE ASSERTION =====
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// EXPLICITELY TELLING THE COMPILER THAT WE WANT TO TREAT AN ENTITY AS A DIFFERENT TYPE
// cid ORIGINALLY TYPE: any BUT WE'RE SETTIN customerId TO THAT AND WE'RE ASSERTING THAT WE WANT IT TO BE TYPE: number
let cid = 1;
// SYNTAX 1 WITH ANGLED BRACKETS:
let customerId = cid; // NOW customerId SHOULD BE A number
// customerId = true;  //Type 'boolean' is not assignable to type 'number'
// SYNTAX 2:
let customerId2 = cid;
// 1️⃣ 
// ❗️❗️❗️ Object is possibly 'null'.ts(2531) ❗️❗️❗️
// !!! "Non-null assertion operator" (!) !!!
/*
https://stackoverflow.com/questions/49431880/ts2531-object-is-possibly-null

You should either check for null (using an if) or use a "Non-null assertion operator" (!) if you are sure it is not null:

if(nativeElement.files != null) {
    this.photoService.upload(this.vehicleId, nativeElement.files[0])
        .subscribe(x => console.log(x));
}

OR
this.photoService.upload(this.vehicleId, nativeElement.files![0])
    .subscribe(x => console.log(x));
Note:

The "Non-null assertion operator" will not perform any runtime checks, it just tells the compiler you have special information and you know nativeElement.files will not be null at runtime.

If nativeElement.files is null at runtime, it will generate an error. This is not the safe navigation operator of other languages.
*/
// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""
const order = (words) => {
    if (words.length === 0) {
        return "";
    }
    else {
        const orderedArr = [];
        words.split(" ").forEach((word) => {
            let numStr = Number(word.match(/[1-9]/)[0]) - 1; // ❗️❗️❗️
            orderedArr[numStr] = word;
        });
        return orderedArr.join(" ");
    }
};
// 2️⃣ 
// ❗️❗️❗️ Object is possibly 'null'.ts(2531) ❗️❗️❗️
/*
const strArr = word.split("");
    strArr.forEach((letter, i) => {
        let regex = new RegExp(letter, "gi");
        console.table(
            {
                letter: strArr[i],
                matches: word.match(regex)?.length
            }
        );
        //❗️❗️❗️ WITHOUT "?" OBJECT IS POSSIBLY NULL ❗️❗️❗️
        //❗️❗️❗️ OPTIONAL PROPERTY "?" ❗️❗️❗️
        let counter: number | undefined = word.match(regex)?.length;
        if (counter !== undefined) {
            if (counter > 1) {
                strArr[i] = ")";
            } else {
                strArr[i] = "(";
            }
        }
    })
    return strArr.join("");
*/
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// ===== FUNCTIONS =====
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// EACH ARGUMENT WE PASS IN HAS TO BE A CERTAIN TYPE AS WELL AS THE RETURN VALUE
// ❗️❗️❗️ BOTH WORK ❗️❗️❗️
const wave = (str) => { return ["hello"]; };
const wave2 = (str) => { return ["hello"]; };
// FUNCTION DECLARATION:
function addNum(x, y) {
    return x + y;
}
// ARROW:
const addition = (x, y) => {
    return x + y;
};
console.log(addition(1, 2));
// console.log(addition(1, "2"));  // Argument of type 'string' is not assignable to parameter of type 'number' !!!
// IF WE DON'T HAVE A RETURN VALUE, USE void AS RETURN VALUE:
const log = (message) => {
    console.log(message);
};
const user3 = {
    id: 1,
    name: "eddie"
};
// THESE 2 FUNCTIONS BOTH USE THE SAME INTERFACE:
const addition2 = (x, y) => x + y;
const substraction = (x, y) => x - y;
// EXAMPLE:
// SOURCE: https://www.reddit.com/r/typescript/comments/hm8jbv/how_to_define_an_interface_for_objects_with/fx4szci/
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// ❗️❗️❗️ DEFINE INTERFACE FOR WHAT'S BEING RETURNED ❗️❗️❗️
// TO AVOID ERROR: Element implicitly has 'any' type because expression of type 'number' can't be used to index type '{}'
// ❗️❗️❗️ LOOK INTO THIS: ❗️❗️❗️
// A type like { [key: string]: number } is just bad and should not be used ever.
// Consider an example: const test: { [key: string]: number } = { a: 1 }; test.b // TS will think it’s of type number, while in fact it’s undefined.
// A type declared like that literally says: „for each key of string type there is a number value”. Which simply is not the case. Just don’t do it. It’s as bad as using any.
// If you need to use an object as a key-value mapper, do it well and either define the keys statically, or make the type of value a union with undefined.
// 1️⃣    WITH filter()
const findOdd = (arr) => {
    const counter = {};
    arr.forEach(num => counter[num] = (counter[num] || 0) + 1);
    const oddTimesArr = Object.entries(counter).filter(([key, value]) => value % 2 > 0);
    // console.log(Number(oddTimesArr[0][0]));
    return Number(oddTimesArr[0][0]);
};
// 2️⃣    WITH forEach()
const findOdd2 = (arr) => {
    const counter = {};
    arr.forEach(num => counter[num] = (counter[num] || 0) + 1);
    let solution; // INITIALIZE ❗️❗️❗️
    Object.entries(counter).forEach(([key, value]) => {
        // value % 2 > 0 && console.log("key: ", Number(key));
        if (value % 2 > 0)
            solution = Number(key); // TYPE ASSERTION ❗️❗️❗️
    });
    return solution;
};
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// ===== CLASSES =====
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// USED TO CREATE OBJECTS (INSTANCES OF THEIR CLASS)
class Person {
    constructor(id, name) {
        console.log("hello from constructor");
        this.id = id; //  TAKE THESE PARAMETERS THAT ARE PASSED IN,
        this.name = name; //  AND ASSIGN THEM TO CLASS PROPERTIES (id, name)
        console.log(this.id, this.name); // this = CURRENT INSTANCE (CLASS WE'RE IN)
    }
    register() {
        return `${this.name} is now registered`;
    }
}
//  CREATE NEW Person{} OBJECTST FROM CLASS
const brad = new Person(777, "brad traversy");
const mike = new Person(666, "michael anthony");
console.log(brad, mike);
// Person { id: 777, name: 'brad traversy' } Person { id: 666, name: 'michael anthony' }
// ACCESS (DATA) MODIFIERS: PUBLIC (DEFAULT), PRIVATE AND PROTECTED
// 1. PUBLIC PROPERTY: (CAN LEAVE IT OUT AS IT IS DEFAULT)
// public id: number
// 2. PRIVATE : CAN ONLY ACCESS FROM WITHIN THE CLASS
// private id: number
// CAN'T EVEN CONSOLE.LOG IT: console.log(brad.id) => ERROR
// 3. PROTECTED: ONLY ACCESS IT WITHIN CLASS OR ANY CLASS THAT IS EXTENDED FROM THIS CLASS
//protected id: number
console.log(brad.register());
class Person2 {
    constructor(id, name) {
        console.log("hello from constructor");
        this.id = id;
        this.name = name;
        console.log(this.id, this.name);
    }
    register() {
        return `${this.name} is now registered`; // SHOULD RETURN string AS DEFINED IN PersonInterface
    }
}
// EXTENDING CLASS TO SUBCLASS
// CREATA AN Employee CLASS, THAT ALSO HAS THE PROPERTIES OF Person (id, name), AND A METHOD OF register BUT WE WANT TO ADD ANOTHER PROPERTY
// SUBCLASS OF Person2
class Employee extends Person2 {
    constructor(id, name, position) {
        super(id, name); // (this.id = id; this.name = name;)    THESE 2 DON'T HAVE TO BE INITIALISED
        this.position = position; // NEW PROPERTY HAS TO BE INITIALISED
        console.log(this.id, this.name, this.position);
    }
}
const employee2 = new Employee(888, "sly stallone", "director");
console.log(employee2.register()); // sly stallone is now registered
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// GENERICS
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// USED TO BUILD REUSABLE COMPONENTS
const getArray = (items) => {
    return new Array().concat(items); // RETURN AN ARRAY OF ANY TYPE
};
//  WE WANT TO USE getArray TO CREATE THESE TWO DIFFERENT ARRAYS
let numArray = getArray([1, 2, 3, 4]);
let stringArr = getArray(["kip", "reb", "paul"]);
// !!! BUT: WE CAN PUSH NON MATCHING TYPES TO THESE ARRAYS WHICH WE DON'T WANT !!!
numArray.push(456); // OK
numArray.push("rod"); // OK       !!! BUG !!!
stringArr.push("659"); // OK
stringArr.push(659); // OK       !!! BUG !!!
//
const getArray2 = (items) => {
    return new Array().concat(items);
};
let numArray2 = getArray2([1, 2, 3, 4]); // DEFINE TYPE  <number>
let stringArr2 = getArray2(["kip", "reb", "paul"]); // DEFINE TYPE  <string>
// numArray2.push("six");  // ERROR, BUG CAUGHT
numArray2.push(6);
// stringArr2.push(987);   // ERROR, BUG CAUGHT
stringArr2.push("alice");
// 47:30 LAST MODULE: TS WITH REACT
// ==================================================================
// TypeScript Course for Beginners 2021 - Learn TypeScript from Scratch!
// ==================================================================
// https://www.youtube.com/watch?v=BwuLxPH8IDs&t=3930s&ab_channel=Academind
// ==================================================================
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
//  SET OF NAMED CONSTANTS
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
// IN TS, FUNCTIONS ARE NOT ALLOWED TO RETURN undefided, TECHNICALLY, THEY DO, SEE ABOVE printResult2
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
// console.log(combineValues(8, 9));   // WE CAN COMPILE BUT WILL GET AN ERROR AT RUNTIME !!!
// NOW, IT CAN ONLY BE A FUNCTION, BUT ANY FUNCTION WHICH IS STILL NOT IDEAL:
let combineValues2;
combineValues2 = printResult2;
console.log(combineValues2(8, 9)); // WE STORED THE WRONG FUNCTION SO WE WILL GET undefined 
// BE MORE PRECISE ABOUT HOW THE FUNCTION SHOULD LOOK LIKE:
let combineValues3;
combineValues3 = add2; // OK 
// combineValues3 = printResult;   // ERROR: printResult DOES NOT MATCH PRE-DEFINED f DESCRIPTION
// CALLBACKS
// CALLBACK WILL ACCEPT ONE ARGUMENT WHICH IS A number
const addAndHandle = (n1, n2, callBack) => {
    const result = n1 + n2;
    callBack(result);
};
// TS WILL KNOW THAT result WILL BE A number AS WE DEFINED IT ABOVE FOR THE CALLBACK
addAndHandle(10, 20, (result) => {
    console.log(result);
    // return result; // WE CAN STILL RETURN BUT WE ARE NOT USING THE RETURN VALUE
});
// ===== UNKNOWN =====
// MORE RESTRICTED THAN any, AND BETTER CHOICE IF WE CAN'T TELL IN ADVANCE WHAT TYPE WILL BE STORED IN IT
// ASSIGNING unknown VALUE TO A FIXED TYPE (string)
let userInput; // NOT GUARANTEED TO BE A STRING IN THIS CASE
// let userInput: any;  //  MOST FLEXIBLE, DISABLES ALL TYPE CHECKS, NO ERROR
let userName;
userInput = 5;
userInput = "max";
// userName = userInput;   // ERROR: Type 'unknown' is not assignable to type 'string'
// WITH unknown FIRST WE HAVE TO CHECK THE TYPE OF THE VALUE CURRENTLY STORED IN userInput BEFORE WE CAN ASSIGN IT TO A VARIABLE THAT CAN ONLY BE A string:
if (typeof userInput === "string") {
    userName = userInput;
}
// ===== NEVER =====
// ANOTHER TYPE A FUNCTION CAN RETURN
// UTILITY FUNCTION THAT GENERATES ERROR OBJECT OR AN INFINITE LOOP
// const generateError: (message: string, code: number) => never
// IT IS RETURNING NOT JUST void, IT RETURNS never, NEVER PRODUCING A RETURN VALUE
const generateError = (message, code) => {
    throw { message: message, errorCode: code };
};
generateError("An error occurred", 500);
// 2 34
