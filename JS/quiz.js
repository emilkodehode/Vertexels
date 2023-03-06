'use strict'
/*
i want to make a quiz and it should be very much all done in javascript like 90%. first i need some questions and for each question i want options to choose
i want some way to keep track of what anser user has chosen and what question we are on. each question should be asked 1 at a time and when user submit a choice we go to next question.
when we are out of question a result should show

question objects is a way to go.

i wanna use
*/

const quizForm = [
    {
        question: "im asking",
        options: ["option a", "option b", "option c", "option d"],
        solutions: ["option a", "option d"],
    },
    {
    question: "im asking another",
    options: ["option 1", "option 2", "option 3", "option 4"],
    solutions: ["option 2", "option 3"],
    }
]

let currentTask = 0

const quizEl = document.getElementById("quiz-el")

function quizTaskMaker(){
    let {question,options,solutions} = quizForm[currentTask]
    let textP = document.createElement("p")
    textP.textContent = question
    quizEl.append(textP)
}

const quizBtn = document.createElement("button")

function quizInitializer(){
    currentTask = 0
    quizTaskMaker()
}
quizInitializer()