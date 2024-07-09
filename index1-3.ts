/* Task 1: Create Variables for Primitive Types
Task: Below is a list of variables with creative names for primitive types. Your task is to create these variables in TypeScript, come up with a logical associated type for each (string, number, bigint, boolean, undefined, null, symbol) and assign a random initial value. Follow the example properties provided. */


let studentName: string = "Bubo De Bubis";
let studentId: string = "0001";
let subjects: string[] = ["Philosophy", "Sociology", "Psychology"];
let major: string | undefined = ""; // OPTIONAL
let isStudying: boolean = true;
let grade: number = 95;
let uniqueSymbol: symbol = Symbol("studentId");

/* Task 2: Define Student Type Alias
Task: Create a type alias Student that represents a student with the properties defined in Task 1. */

type Student = {
  studentName: string;
  studentId: string;
  subjects: string[];
  major?: string | undefined;
  isStudying: boolean;
  grade: number;
  id: symbol;
  // (Added - Task 4)
  allScores: number[];
}

let buboSomaro: Student = {
  studentName: "Bubo Somaro",
  studentId: "0001",
  subjects: ["Philosophy", "Sociology", "Psychology"],
  // major: "Sociology";
  grade: 100,
  isStudying: true,
  id: Symbol("0001"),
  // (Added - Task 4)
  allScores: [100, 95, 45, 63, 27],
}

/* Task 3: Understand Scope (Local and Global)
Task: Explain the difference between local scope and global scope in TypeScript (2-3 sentences) and provide a code example for a global scope variable and a local scope variable to illustrate the concepts. */

let globalVar: string = "Hello, global scope!";

function testFunction() {
  let localVar: string = "Hello, local scope!";

  console.log(globalVar);
  console.log(localVar);
}

testFunction();

console.log(globalVar);

// console.log(localVar);

const calculateAvgGrade = (student: Student) => {
  return student.allScores.reduce((a, b) => (a + b)) / student.allScores.length;
}

console.log(calculateAvgGrade(buboSomaro));