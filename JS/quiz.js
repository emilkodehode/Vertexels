'use strict'
/*
i want to make a quiz and it should be very much all done in javascript like 90%. first i need some questions and for each question i want options to choose
i want some way to keep track of what anser user has chosen and what question we are on. each question should be asked 1 at a time and when user submit a choice we go to next question.
when we are out of question a result should show

question objects is a way to go.

goal of this assigment for me for the most part is to use return explicitly. i have had no issue completing a given task always a way. but i want to be better.

so i have quiz now to get answers and get next question. remove current question keep value of submitted answer and get next question.
*/

const quizForm = [
    {
    question: "im asking",
    options: ["option a", "option b", "option c", "option d"],
    scores: [1,-1,-1,1],
    },
    {
    question: "im asking another",
    options: ["option 1", "option 2", "option 3", "option 4"],
    scores: [-1,1,1,-1],
    }
]

const quizEl = document.getElementById("quiz-el")

function quizInitializer(){
    let currentTask = -1
    const quizBtn = document.createElement("button")
    quizBtn.textContent = "start quiz"
    quizBtn.addEventListener("click",(e)=>{
        currentTask++
        quizButtonHandler(e.target, currentTask)
    })
    quizEl.append(quizBtn)
}

function quizButtonHandler(click,currentTask){
    //this should handle getting next question and keeping users answers
    //so im gonna write seperate function for getting and keeping answers clearing current question and drive towards next question until the end.
    //3 unique states. start middle end. all driven by current task
    let userScore = 0
    let submittedValues = quizEl.querySelectorAll(`input:checked`)
    for (const submit of submittedValues) {
        userScore += +submit.value
    }
    console.log(userScore)
    if(currentTask === -1){
        click.textContent = "start quiz"
        quizTaskHandler(currentTask)
    }
    else if(currentTask < quizForm.length -1){
        click.textContent = "submit answer"
        quizTaskHandler(currentTask)
    }
    else{
        click.textContent = "submit and get score"
    }
}


function elementCreator(tag = "div", props = {}){
    let element = document.createElement(tag)
    for (const prop of Object.entries(props)) {
        const [key,value] = prop
        element[key] = value
    }
    return element
}

quizInitializer()

function quizTaskHandler(currentTask){
    const {question,options,scores} = quizForm[currentTask]
    const quizContainer = elementCreator("div", {className: "quizcontainer"})
    const textP = elementCreator("p")
    textP.textContent = question
    quizEl.append(textP)
    let i = 0
    //i see map is better to just make a collection i started of with a for each but i want to focus on finding ways to use return explicitly
    const container = options.map(option => {
        let choice = elementCreator("label", {textContent: option})
        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.value = scores[i]
        i++
        checkbox.style.display = "inline-block"
        choice.append(checkbox)
        return choice
    });
    //fuk yeah rememberd spread thingy after i got a bunch of htmlstuff in console
    quizContainer.append(...container)
    quizEl.append(quizContainer)
}
