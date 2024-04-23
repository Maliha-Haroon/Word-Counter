#! /usr/bin/env node

import inquirer from "inquirer"; 
import chalk from "chalk";

//display a colorfull welcome message
console.log(chalk.bold.bgYellow("\n \t\t welcome to M.H word counter"));
console.log( "*-".repeat(30));

//prompt the user to enter a sentence
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence",
    }
]);

//triming the sentence and spliting it into words based on "spaces"

let words = answer.sentence.trim().split(" ");

//analysis of user input sentence
console.log("=".repeat(30));
console.log(chalk.bold("- Sentence Word:"));
console.log(words);
console.log(chalk.bold(`\n -Word Count: ${chalk.bold.greenBright(words.length)}`
));
console.log("=".repeat(30));
