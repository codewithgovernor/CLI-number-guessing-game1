#! /usr/bin/env node
import inquirer from "inquirer";
// comuter will generate a randome number between 1 and 100
// user input for guessing number
// compare user input with computer generated number
const randome = Math.floor(Math.random() * 10 + 1);
console.log("welcome to the number guessing game");
const answers = await inquirer.prompt([
    {
        name: "userguessnumber",
        type: "number",
        message: "please guesss the number 1-10",
    },
]);
if (answers.userguessnumber === randome) {
    console.log("congragulation you chose correct number");
}
else {
    console.log("you chose wrong number");
}
console.log("good luck!");
