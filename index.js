const fs = require('fs')
const question = require('./questions')

fs.writeFileSync("questions.json", JSON.stringify({ questions: [question] }))

const questionsJson = JSON.parse(fs.readFileSync("questions.json"))
// console.log(questionsJson);
// console.log(questions);
// console.log(questionsJson);
questionsJson.questions.push(question())
// console.log(questionsJson);
fs.writeFileSync("questions.json", JSON.stringify(questionsJson))