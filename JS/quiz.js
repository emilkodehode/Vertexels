'use strict'
import { quizData } from "./quizdata.js"
/*
i want to make a quiz. first i need some questions and for each question i want options to choose from.
i want the possibility for mutiple choice questions and single choise. the questions themselves should state if multiple choices is and option
and when the question only have 1 right answer user should not be able to chek of more than 1 box.

i want some way to keep track of what anser user has chosen and what question we are on.
each question should be asked 1 at a time and when user submit a choice we go to next question.

for now i will make the quiz go straightforward question choice answer next no going back. score will be shown at the end.

when we are out of question a result should show with a score

i have desgined the question object around a scoring system thinking about potential value of correct answer to multiple choice and the weight of a correct one can impact more and punish a completely wrong answer.
todo: for easier readability i should make the options an object itself with options.Text and options.Score i need to fiddle a little more to make that work



todo:
done : so i have quiz now to get answers and get next question. remove current question keep value of submitted answer and get next question.
done : make it so that mutliple choices are allowed and sometimes not i think given how labeling and checkbox work if i create name aswell
done: reset quiz, when pressing the button on the result it should completely reset the quiz from the start
done: make a proper intro explaining in brief this quiz and what to expect like sqares mean multiple choice circle 1 choice what the theme is and such
done: i need to make a proper score totalt, i think when i create the choices value i can just check for each positive integer above 0 add them all togheter
for the potential max score set that and get it when the final result is shown


scramble choices so they dont appear in the same order
if i want to scramlbe i use classic for loop i know how, but i want to experiement with the index with map maybe i can make it
scramble questions themselves so they dont appear in the same order

*/
const quizForm = quizData
//live server to see it work otherwise cors error

//i wanted to have this quizEl be a parameter for quizInitialiser but that made it so i hade to pass it around more than expected. quizEventHandler already have way to many parameters. oh well good practice for next time to reduce concern and responsibilty and such
const quizEl = document.getElementById("quiz-el")

function quizInitializer(quizFormData){
    //this is probably a bad way to use this as a form of state
    let currentTask = 0
    const quizBtn = document.createElement("button")
    quizBtn.textContent = "start quiz"
    //my logic flow is flawed. i want to prevent user from going to next question without selecting a choice
    //i made it happen but i feel it is very hacky way of doing it
    let userScore = 0
    //additional check to stop rerender hacky way but works
    let sameQuestion = currentTask
    sameQuestion++
    quizBtn.addEventListener("click",(e)=>{
        //this works but i rerender the same question and that is bad. for now i keep this
        if(quizEl.querySelector(`input:checked`)){
            currentTask++
            userScore = updateScore(userScore)
        }
        else if(currentTask === quizFormData.length){
            currentTask = 0
            quizInitializer(quizFormData)
        }
        //additional check to stop otherwise i rerender the same question
        if(sameQuestion !== currentTask){
            console.log(userScore)
            quizEventHandler(e.target, currentTask, quizFormData, userScore)
        }
        sameQuestion = currentTask
    })
    quizEl.append(quizBtn)
}

function quizEventHandler(click, currentTask, quizForm, userScore){
    /*
    this should handle getting next question and keeping users answers
    clearing current question and drive towards next question until the end.
    when at end display score and a retry button to reset whole thing.
    3 unique "states/conditions". start middle end. all driven by current task
    */
    if(currentTask === (quizForm.length - 1)){
        reRenderQuiz(quizEl)
        click.textContent = "submit and get score"
        quizTaskHandler(currentTask, quizForm)
    }
    else if(currentTask === quizForm.length){
        reRenderQuiz(quizEl)
        let result = showScore(userScore)
        click.textContent = "reset and retake quiz?"
        quizEl.append(result)
    }
    else{
        reRenderQuiz(quizEl)
        quizTaskHandler(currentTask, quizForm)
        click.textContent = "submit answer"
    }
}

function updateScore(score){
    let submittedValues = quizEl.querySelectorAll(`input:checked`)
    for (const submit of submittedValues) {
        score += +submit.value
    }
    return score
}

function showScore(score){
    let scoreEl = elementCreator("p", {class: "scoreEl"})
    scoreEl.textContent = `you finished this quiz with a score of ${score} out of ${maxPossibleScore(quizForm)}`

    return scoreEl
}

function reRenderQuiz(element){
    while(element.childElementCount > 1){
        element.removeChild(quizEl.firstChild)
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

function maxPossibleScore(quizForm){
    let maxscore = 0
    quizForm.forEach(element => {
        for (let i = 0; i < element.scores.length; i++) {
            if(element.scores[i] > 0){
                maxscore += element.scores[i]
            }
        }
    })
    return maxscore
}

//creates the html elements containing the quiz questions and their given choices
//read up on idem potensy stateless
function quizTaskHandler(currentTask, quizData){
    const {question,options,scores,multipleChoice} = quizData[currentTask]
    const textP = elementCreator("p", {textContent: question, id: "questiontext"})
    
    const quizContainer = elementCreator("div", {className: "quizcontainer"})
    const container = options.map(option => {
        let choice = elementCreator("label", {textContent: option})
        let inputEl = document.createElement("input")
        inputEl.type = multipleChoice ? "checkbox" : "radio"
        
        let i = 0
        //quick way to select next value
        inputEl.value = scores[i]
        i++
        
        if(!multipleChoice){
            let onechoice = question
            choice.name = onechoice
            inputEl.name = onechoice
        }
        choice.append(inputEl)
        return choice
    });
    //awww yisss rememberd spread thingy after i got a bunch of htmlstuff in console
    quizContainer.append(...container)
    quizEl.prepend(quizContainer)
    quizEl.prepend(textP)
}

quizInitializer(quizForm)