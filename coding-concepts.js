// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: This will log 5
// b) Verify and explain: .push will add indigo making the total count 5


// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: This will log 10
// b) Verify and explain: .length will count and return all characters including spaces


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: This will log "o"
// b) Verify and explain: Index starts counting at 0 making "o" fourth in the string


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: This will log "Ruby"
// b) Verify and explain: Index starts counting at 0 making "Ruby" first 


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: This will log SATURDAY, SUNDAY
// b) Verify and explain: I was wrong and got an error message. I forgot this is an an array and not a string so .toUpperCase would not apply. 


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer: This would log "number"
// b) Verify and explain: .length is used with numbers so "string" and "boolean" would not return
