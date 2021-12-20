// https://www.youtube.com/watch?v=BCg4U1FzODs&ab_channel=TraversyMedia

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

// =============== BASIC TYPES ===============

let id: number = 5;
let company: string = "Traversy Media";
let isPublished: boolean = true;
let x: any = "Hello";

let ids: number[] = [1, 2, 3];          // ARRAY THAT CAN ONLY CONTAIN NUMBERS
let arr: any[] = [1, true, "hello"];    // ARRAY CAN HOLD VALUES OF ANY TYPE


//  ===== TUPLE =====

//  SPECIFY THE EXACT TYPES AT EVERY INDEX INSIDE OF THE ARRAY
let personArr: [number, string, boolean] = [1, "john", true];

//  TUPLE ARRAY (ARRAY OF TUPLES)
let employee: [number, string][];
employee = [[1, "brad"], [2, "dave"], [3, "steve"]];


//  ===== UNION =====

//  VARIABLE TO HOLD MORE THAN ONE TYPE
let pid: string | number | undefined | null | boolean | symbol = 33;
// pid = 33;
pid = "33";
pid = undefined;
pid = null;
pid = true;
pid = Symbol('foo');


// ===== ENUM (ENUMERATED) =====

// SET OF NAMED CONSTANTS (NUMERIC BY DEFAULT OR STRING) 

enum direction1 {
    up = 1,             // DEFAULT VALUE: 0 AND SO ON !!!
    down,
    left,
    right
}

// IF WE CHANGE up = 1, THEN INDICES WILL START ON 1, 2, 3 ETC..

console.log(direction1.up); // 0

enum direction2 {
    up = "up",
    down = "down",
    left = "left",
    right = "rigth"
}

console.log(direction2.left)  // left



// ===== OBJECTS =====

// STEP 1:
const user: {
    id: number,
    name: string
} = {
    id: 1,
    name: "alex"
}

// STEP 2: SET UP A type
type User = {
    id: number,
    name: string
}

const user2: User = {
    id: 1,
    name: "eddie"
}

// ===== TYPE ASSERTION =====

// EXPLICITELY TELLING THE COMPILER THAT WE WANT TO TREAT AN ENTITY AS A DIFFERENT TYPE
// cid ORIGINALLY TYPE: any BUT WE'RE SETTIN customerId TO THAT AND WE'RE ASSERTING THAT WE WANT IT TO BE TYPE: number

let cid: any = 1;

// SYNTAX 1 WITH ANGLED BRACKETS:
let customerId = <number>cid;   // NOW customerId SHOULD BE A number
// customerId = true;  //Type 'boolean' is not assignable to type 'number'

// SYNTAX 2:
let customerId2 = cid as number;



// ===== FUNCTIONS =====

// FUNCTION DECLARATION
function addNum(x: number, y: number): number {
    return x + y
}


const addition = (x: number, y: number): number => {
    return x + y;
}

console.log(addition(1, 2));
// console.log(addition(1, "2"));  // Argument of type 'string' is not assignable to parameter of type 'number' !!!

// IF WE DON'T HAVE A RETURN VALUE, USE void AS RETURN VALUE:
const log = (message: string | number): void => {
    console.log(message);
}

// log("hello");   // STRING: OK
// log(500);       // NUMBER: OK
// log(true);      // ANYTHIG ELSE: ERROR !!!


// ===== INTERFACES =====

// MAP OUT HOW OUR FUNCTIONS, OBJECTS OR CLASSES ARE SUPPOSED TO LOOK LIKE

// CUSTOM TYPE TO DESCRIBE AN  OBJECT OR FUNCTION, SIMILAR TO type, BUT WE CAN'T USE PRIMITIVES OR UNIONS !!!

// WITH OBJECT:
interface UserInterface {
    readonly id: number,    // READ ONLY PROPERTY
    name: string,
    age?: number            // OPTIONAL PROPERTY

}

const user3: UserInterface = {
    id: 1,
    name: "eddie"
}

// WITH FUNCTION:
interface MathFunc {
    (x: number, y: number): number
}

const addition2: MathFunc = (x: number, y: number): number => x + y;
const substraction: MathFunc = (x: number, y: number): number => x - y;



// CLASSES 

class Person {
    id: number
    name: string

    constructor(id: number, name: string) {
        console.log("hello from constructor");
        this.id = id;
        this.name = name;
        console.log(this.id, this.name);
    }

    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(777, "brad traversy");
const mike = new Person(666, "michael anthony");

console.log(brad, mike);

// ACCESS (DATA) MODIFIERS: PUBLIC (DEFAULT), PRIVATE AND PROTECTED

// 1. PUBLIC PROPERTY: (CAN LEAVE IT OUT AS IT IS DEFAULT)
// public id: number

// 2. PRIVATE : CAN ONLY ACCESS FROM WITHIN THE CLASS
// private id: number

// CAN'T EVEN CONSOLE.LOG IT: console.log(brad.id) => ERROR

// 3. PROTECTED: ONLY ACCESS IT WITHIN CLASS OR ANY CLASS THAT IS EXTENDED FROM THIS CLASS
//protected id: number

console.log(brad.register());

// IMPLEMENT interface TO class

interface PersonInterface {
    id: number,    // READ ONLY PROPERTY
    name: string,
    age?: number            // OPTIONAL PROPERTY
    register(): string;
}

class Person2 implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        console.log("hello from constructor");
        this.id = id;
        this.name = name;
        console.log(this.id, this.name);
    }

    register() {
        return `${this.name} is now registered`
    }
}


// EXTENDING CLASS TO SUBCLASS

// CREATA AN Employee CLASS, THAT ALSO HAS THE PROPERTIES OF Person (id, name), AND A METHOD OF register BUT WE WANT TO ADD ANOTHER PROPERTY

// SUBCLASS OF Person2
class Employee extends Person2 {
    position: string

    constructor (id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
        console.log(this.id, this.name, this.position);
    }
}

const employee2 = new Employee(888, "sly stallone", "director");
console.log(employee2.register());




// GENERICS

// USED TO BUILD REUSABLE COMPONENTS

const getArray = (items: any[]): any[] => {
    return new Array().concat(items);
}

let numArray = getArray([1, 2, 3, 4]);
let stringArr = getArray(["kip", "reb", "paul"]);

numArray.push("rod");   // OK
stringArr.push(659);    // OK



//

const getArray2 = <T>(items: T[]): T[] => {
    return new Array().concat(items);
}

let numArray2 = getArray2<number>([1, 2, 3, 4]);
let stringArr2 = getArray2<string>(["kip", "reb", "paul"]);

// numArray2.push("six");  // ERROR
numArray2.push(6);

// stringArr2.push(987);   // ERROR
stringArr2.push("alice");
























// ==================================================================
// ==================================================================
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
const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + n1 + n2);  // Result is: 53
        console.log(phrase, result);    // Result is:  8
    } else {
        return result;
    }
}

// NO ASSIGNMENT HERE AS TS HAS TYPE INFERENCE:
const number1 = 5;  // INFERRED TO "number"
// let number1 = 5;
const number2 = 3;
const printResult = true;   // INFERRED TO "boolean"
const resultPhrase = "Result is: "; // INFERRED TO "string"


// BUT:
let number3: number;    // SPECIFY TYPE WHEN INITIALISING
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
const person: {
    name: string;
    age: number;
} = {
    name: "max",
    age: 30
}

console.log(person.name)



// ===== ARRAY =====

// ELEMENT TYPES CAN BE FLEXIBLE (any) OR STRICT (SPECIFIED)

const hobbies = ["sports", "cooking"];
// const hobbies2: string[]; // const VARIABLES MUST BE INITIALISED
let hobbies2: string[];        // ARRAY OF STRINGS 
hobbies2 = ["sports", "cooking"];

for (const hobby of hobbies2) {
    console.log(hobby.toUpperCase());   // CAN CALL STRING METHODS
    // console.log(hobby.map());    !!! ERROR AS map IS ARRAY METHOD !!!
}



// ===== TUPLE =====

// IF WE KNOW THE NUMBER OF TYPE OF VALUES IN ADVANCE

//  ARRAY:

// UNION TYPE MIGHT HOLD STRINGS OR NUMBERS BUT WE CAN MUTATE THIS ARRAY
const role = [2, "author"];    // => const role: (string | number)[]


//  TUPLE: 

// DEFINING EXACT STRUCTURE OF ARRAY, [0] MUST BE NUMBER AND [1] MUST BE STRING
// LENGTH WILL BE ENFORCED EXCEPT FOR push()
// !!! WE CAN STILL role2.push("admin") !!!
let role2: [number, string];



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
enum Role { ADMIN, READ_ONLY, AUTHOR }; // 0, 1, 2
// CUSTOM STARTS WITH OTHER NUMBER:
enum Role2 { ADMIN = 5, READ_ONLY, AUTHOR }; // 5, 5, 7
//  OR ANY VALUE:
enum Role3 { ADMIN = 5, READ_ONLY = 876, AUTHOR = "author" }; // 5, 876, "author"

const person2 = {
    name: "john",
    role: Role.ADMIN
}

if (person2.role === Role.ADMIN) {
    console.log("is admin");
}



// ===== ANY =====

// TS WILL NOT COMPLAIN, TRY NOT TO USE
// USE IT AS A FALLBACK WHEN WE DON'T KNOW THE TYPES IN ADVANCE



// ===== UNION =====


// MAKE combine WORK WITH BOTH NUMBERS AND STRINGS
const combine = (input1: number, input2: number) => {
    const result = input1 + input2;
    return result;
}

const combinedAges = combine(10, 5);
console.log(combinedAges);  // 15 AS EXPECTED

// const combinedNames = combinedAges("hello", "world"); // !!! ERROR !!!



// ===== LITERAL =====

// BASED ON A CORE TYPE, BUT WITH A SPECIFIC VALUE: resultConversion: "as-number" | "as-string"

// const combine4 = (
//     input1: number | string,
//     input2: number | string,
//     resultConversion: "as-number" | "as-string"
// ) =>

const combine2 = (input1: number | string, input2: number | string) => {
    let result;
    // MIGHT NEED A RUNTIME TYPE CHECK:
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;   // MAKE SURE INPUTS ARE NUMBERS (ADD)
    } else {
        result = input1.toString() + input2.toString(); // INPUTS ARE STRINGS (CONCAT)
    }
    return result;
}

console.log(combine2(10, 5));               // 15
console.log(combine2("hello", "world"));    // "helloworld"


// ALLOW / FORCE CONVERSION FROM number =>  string / string => number TO ALLOW STRING INPUTS RETURNED AS NUMBER

const combine3 = (input1: number | string, input2: number | string, resultConversion: string) => {
    let result;
    // RUNTIME TYPE CHECK:
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;   // MAKE SURE INPUTS ARE NUMBERS (ADD)
    } else {
        result = input1.toString() + input2.toString(); // INPUTS ARE STRINGS (CONCAT)
    }

    if (resultConversion === "as-number") {
        return +result;
        // return parseFloat(result);
    } else {
        return result.toString();
    }
    return result;
}

// OR:

const combine4 = (
    input1: number | string,
    input2: number | string,
    resultConversion: "as-number" | "as-string" // ALLOW 2 EXACT VALUES ONLY AS TYPE !!!
) => {
    let result;
    // RUNTIME TYPE CHECK:
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
        result = +input1 + +input2;   // MAKE SURE INPUTS ARE NUMBERS (ADD)
    } else {
        result = input1.toString() + input2.toString(); // INPUTS ARE STRINGS (CONCAT)
    }

    // if (resultConversion === "as-number") {
    //     return +result;
    //     // return parseFloat(result);
    // } else {
    //     return result.toString();
    // }
    return result;
}


console.log(combine4(10, 5, "as-number"));               // 15
console.log(combine4(10, 5, "as-string"));               // "15"
console.log(combine4("hello", "world", "as-string"));    // "helloworld"



// ===== TYPE ALIAS =====

type Combinable = number | string;  // ALLOW 2 EXACT VALUES ONLY AS TYPE !!!
type ConversionDescriptor = "as-number" | "as-string";

const combine5 = (
    input1: Combinable, // USE Combinable TYPE ALIAS
    input2: Combinable,
    resultConversion: ConversionDescriptor // USE ConversionDescriptor TYPE ALIAS
) => {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
        result = +input1 + +input2;   // MAKE SURE INPUTS ARE NUMBERS (ADD)
    } else {
        result = input1.toString() + input2.toString(); // INPUTS ARE STRINGS (CONCAT)
    }
    return result;
}

console.log(combine5(10, 5, "as-number"));               // 15
console.log(combine5(10, 5, "as-string"));               // "15"
console.log(combine5("hello", "world", "as-string"));    // "helloworld"





// ===== FUNCTION RETURN TYPES AND VOID =====
// (NO RETURN STATEMENT: void / RETURN WITH NO VALUE: undefined)

const add2 = (n1: number, n2: number): number => {  // OPTIONAL RETURN TYPE
    return n1 + n2;
}

// LET TS INFER RETURN TYPE UNLESS WE EXPLICITELY WANT TO DEFINE IT !!!

// printResult2 IS NOR RETURNING ANYTHING SO ITS RETURN TYPE IS: void, WE DONT HAVE TO SPECIFY IT, TS INFERENCE WILL DO IT FOR US: const printResult2 = (num: number): void =>
const printResult2 = (num: number) => { // const printResult2: (num: number) => void
    console.log("Result: " + num);
}

printResult2(add2(3, 8));               // 11
console.log(printResult2(add2(3, 8)));  // !!! undefined !!! BECAUSE printResult2 RETURNS undefined !!!

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
combineValues = add2;               // STORE FUNCTION IN VARIABLE
console.log(combineValues(8, 9));   // EXECUTE VARIABLE AS FUNCTION

combineValues = 5;        // combineValues IS TYPE: any, 
// console.log(combineValues(8, 9));   // WE CAN COMPILE BUT WILL GET AN ERROR AT RUNTIME !!!

// NOW, IT CAN ONLY BE A FUNCTION, BUT ANY FUNCTION WHICH IS STILL NOT IDEAL:
let combineValues2: Function;
combineValues2 = printResult2;
console.log(combineValues2(8, 9));  // WE STORED THE WRONG FUNCTION SO WE WILL GET undefined 

// BE MORE PRECISE ABOUT HOW THE FUNCTION SHOULD LOOK LIKE:
let combineValues3: (a: number, b: number) => number;
combineValues3 = add2;          // OK 
// combineValues3 = printResult;   // ERROR: printResult DOES NOT MATCH PRE-DEFINED f DESCRIPTION

// CALLBACKS

// CALLBACK WILL ACCEPT ONE ARGUMENT WHICH IS A number
const addAndHandle = (n1: number, n2: number, callBack: (num: number) => void) => {
    const result = n1 + n2;
    callBack(result);
}

// TS WILL KNOW THAT result WILL BE A number AS WE DEFINED IT ABOVE FOR THE CALLBACK
addAndHandle(10, 20, (result) => {
    console.log(result);
    // return result; // WE CAN STILL RETURN BUT WE ARE NOT USING THE RETURN VALUE
});



// ===== UNKNOWN =====
// MORE RESTRICTED THAN any, AND BETTER CHOICE IF WE CAN'T TELL IN ADVANCE WHAT TYPE WILL BE STORED IN IT

// ASSIGNING unknown VALUE TO A FIXED TYPE (string)

let userInput: unknown; // NOT GUARANTEED TO BE A STRING IN THIS CASE
// let userInput: any;  //  MOST FLEXIBLE, DISABLES ALL TYPE CHECKS, NO ERROR
let userName: string;

userInput = 5;
userInput = "max";
// userName = userInput;   // ERROR: Type 'unknown' is not assignable to type 'string'

// WITH unknown FIRST WE HAVE TO CHECK THE TYPE OF THE VALUE CURRENTLY STORED IN userInput BEFORE WE CAN ASSIGN IT TO A VARIABLE THAT CAN ONLY BE A string:
if (typeof userInput === "string") {
    userName = userInput
}



// ===== NEVER =====
// ANOTHER TYPE A FUNCTION CAN RETURN

// UTILITY FUNCTION THAT GENERATES ERROR OBJECT OR AN INFINITE LOOP
// const generateError: (message: string, code: number) => never
// IT IS RETURNING NOT JUST void, IT RETURNS never, NEVER PRODUCING A RETURN VALUE
const generateError = (message: string, code: number) => {
    throw { message: message, errorCode: code }
}

generateError("An error occurred", 500);

// 2 34