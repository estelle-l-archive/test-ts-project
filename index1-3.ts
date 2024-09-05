/* Task 1: Create Variables for Primitive Types
Task: Below is a list of variables with creative names for primitive types. Your task is to create these variables in TypeScript, come up with a logical associated type for each (string, number, bigint, boolean, undefined, null, symbol) and assign a random initial value. Follow the example properties provided. */


let studentName: string = "Bubo De Bubis";
let studentId: string = "0001";
let subjects: string = "Philosophy, Sociology, Psychology";
let major: string | undefined = "";
let isStudying: boolean = true;
let grade: number = 95;
let uniqueSymbol: symbol = Symbol("studentId");

/* Task 2: Define Student Type Alias
Task: Create a type alias Student that represents a student with the properties defined in Task 1. */

type Student = {
  studentName: string;
  studentId: string;
  subjects: string;
  major?: string;
  isStudying: boolean;
  grade: number;
  id: symbol;
  // (Added - Task 4)
  allScores: number[];
  attendance: number;
}

let buboSomaro: Student = {
  studentName: "Bubo Somaro",
  studentId: "0001",
  subjects: "Philosophy, Sociology, Psychology",
  // major: "Sociology";
  grade: 100,
  isStudying: true,
  id: Symbol("0001"),
  // (Added - Task 4)
  allScores: [100, 95, 45, 63, 27],
  attendance: 100,
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

/* TASK 4
Update the Student type with the property:
allScores (number[]): An array of the student's scores.
Implement a function calculateGrade: 
The function should accept a Student object as its parameter.
It should calculate the total score by summing up all the scores in the scores array.
Compute the average score by dividing the total score by the number of scores.
Return a grade based on the average score using the predefined criteria.
The grade should be determined using the following criteria:
Average score >= 90: Grade "A"
Average score >= 80: Grade "B"
Average score >= 70: Grade "C"
Average score >= 60: Grade "D"
Average score < 60: Grade "F"
 */

const calculateGrade = (student: Student) : string => {
  const avgScore: number = student.allScores.reduce((a, b) => (a + b)) / student.allScores.length;
  console.log(`${student.studentName}'s average score is ${avgScore}.`)
  console.log(`${student.studentName}'s attendance rate is ${student.attendance}%.`)
  if (student.attendance < 75 || avgScore < 60) return `${student.studentName} got an F.`;
  else if (avgScore >= 90) return `${student.studentName} got an A.`;
  else if (avgScore >= 80) return `${student.studentName} got a B.`;
  else if (avgScore >= 70) return `${student.studentName} got a C.`;
  return `${student.studentName} got a D.`;
  }

console.log(calculateGrade(buboSomaro));

//#region Student List

let aliceJohnson: Student = {
  studentName: "Alice Johnson",
  studentId: "0002",
  subjects: "Math, Physics, Literature",
  major: "Computer Science", // Optional
  grade: 95,
  isStudying: true,
  id: Symbol("0002"),
  allScores: [95, 89, 92, 85, 90],
  attendance: 95,
};

let johnDoe: Student = {
  studentName: "John Doe",
  studentId: "0003",
  subjects: "History, Economics, Political Science",
  major: "Economics", // Optional
  grade: 88,
  isStudying: false,
  id: Symbol("0003"),
  allScores: [88, 76, 90, 85, 80],
  attendance: 85,
};

let marySmith: Student = {
  studentName: "Mary Smith",
  studentId: "0004",
  subjects: "Biology, Chemistry, Physics",
  major: "Biology", // Optional
  grade: 92,
  isStudying: true,
  id: Symbol("0004"),
  allScores: [92, 85, 88, 90, 87],
  attendance: 40,
};

let davidBrown: Student = {
  studentName: "David Brown",
  studentId: "0005",
  subjects: "Art, Music, Drama",
  // No major specified (optional field)
  grade: 78,
  isStudying: false,
  id: Symbol("0005"),
  allScores: [78, 80, 75, 70, 82],
  attendance: 25,
};

//#endregion

console.log(calculateGrade(aliceJohnson));
console.log(calculateGrade(johnDoe));
console.log(calculateGrade(marySmith));
console.log(calculateGrade(davidBrown));