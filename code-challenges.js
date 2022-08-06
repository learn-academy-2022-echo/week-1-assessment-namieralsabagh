// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:
// declare a function named firstString
// input the two strings
// expected output is the string with more characters will return
// utilize conditional statements to return string with mose characters
// utilize built in method to determine the amount of characters in each variable utlizing .length


// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"

//function
const firstString = (produce1, produce2) => {
    if(produce1.length > produce2.length){
        return produce1
    } else {
    return produce2
    }
}
console.log(firstString(fruit1, fruit2))
console.log(firstString(fruit3, fruit4))


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code:
//declare a function returnTemp
//input the temps
//expected output it temps will say "is below boling point" , or "is at boiling point"
//utilize else if to return the temp and boiling point

const temp1 = 42
const temp2 = 350
const temp3 = 212

//function
const runTemp = (notBoiling, boiling, aboveBoiling) => {
   if(notBoiling === "under") {
    return `${temp1} is below boiling point`
   } else if(boiling === "at") {
    return `${temp2} is at boiling point`
   } else if(aboveBoiling === "above") {
    return `${temp3} is above boiling point`
   }
}
console.log(runTemp(42))
console.log(runTemp(350))
console.log(runTemp(212))

// Cant figure the above out. Trying to log runTemp but keep getting undefined. I've tried switching out variables but can't seem to make this one work. I think I am not assigning or declaring correctly. 


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code:
//create variable numArr 
// combine arrays utilizing concat
//log numArr utlizing .length

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

let numArr = myNumbers1.concat(myNumbers2)
console.log(numArr.length)


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ohcE"

// Pseudo code:
// Utilize .split and split each charecter 
// Utilize .reverse to reverse the array
// Utilize .join to create string 

const currentCohort = "Echo 2022"

console.log(currentCohort.split('').reverse().join(''))




// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code:
//Conditional statement evaluating if even or odd number utlizing modulo on items
// Utilize if and else statements

const myArray = [13, 34, 5, 10, 27, 42]

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] % 2 === 0) {
        console.log(`${myArray[i]} is even`)
    } else {
        console.log(`${myArray[i]} is odd`)
    }
}



// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code:
//Create function numSub
// Use - to reduce larger number by smaller number
// console.log the results

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

const numSub = (numOne, numTwo) => {
        return numOne - numTwo
    }

console.log(numSub(100, 58))
console.log(numSub(27, 24))
