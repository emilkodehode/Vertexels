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

const quizEl = document.getElementById("quiz-el")

function quizInitializer(){
    let currentTask = -1
    const quizBtn = document.createElement("button")
    quizBtn.textContent = "start quiz"
    quizBtn.addEventListener("click",(e)=>{
        currentTask++
        quizTaskMaker(currentTask)
        quizButtonHandler(e.target, currentTask)
    })
    quizEl.append(quizBtn)
}

function quizButtonHandler(click,currentTask){
    if(currentTask === -1){
        click.textContent = "start quiz"
    }
    else if(currentTask === quizForm.length -1){
        click.textContent = "submit and get score"
    }
    else{
        click.textContent = "submit answer"
    }
    while(quizEl.children.length + 1){
        quizEl.remove(1)
    }
}

quizInitializer()

function quizTaskMaker(currentTask){
    let {question,options} = quizForm[currentTask]
    let textP = document.createElement("p")
    options.forEach(option => {
        let container = document.createElement("label")
        container.textContent = option
        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.value = option
        checkbox.style.display = "inline-block"
        container.append(checkbox)
        quizEl.append(container)
    });
    textP.textContent = question
    quizEl.append(textP)
}
