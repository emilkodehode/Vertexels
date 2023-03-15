'use strict'
/*
i want to make a quiz. first i need some questions and for each question i want options to choose from.
i want the possibility for mutiple choice questions and single choise. the questions themselves should state if multiple choices is and option
and when the question only have 1 right answer user should not be able to chek of more than 1 box.

i want some way to keep track of what anser user has chosen and what question we are on.
each question should be asked 1 at a time and when user submit a choice we go to next question.

for now i will make the quiz go straightforward question choice answer next no regretting. score will be shown at the end.

when we are out of question a result should show with a score

question objects is a way to go.

todo:
so i have quiz now to get answers and get next question. remove current question keep value of submitted answer and get next question.
make it so that mutliple choices are allowed and sometimes not i think given how labeling and checkbox work if i create name aswell
*/

const quizForm = [
    {
    question: "im asking first question. multiple choice yes",
    options: ["option a", "option b", "option c", "option d"],
    scores: [1,-1,-1,1],
    multipleChoice: true
    },
    {
    question: "im asking the second question. multiple choice no",
    options: ["option 1", "option 2", "option 3", "option 4"],
    scores: [-1,1,1,-1],
    multipleChoice: false

    },
    {
    question: "this is the third question. multiple choice yes",
    options: ["this choice", "that one", "maybe this", "chose me"],
    scores: [-1,1,1,-1],
    multipleChoice: true
    }
]

const quizEl = document.getElementById("quiz-el")

function quizInitializer(){
    //this is probably a bad way to use this as a form of state
    let currentTask = 0
    const quizBtn = document.createElement("button")
    quizBtn.textContent = "start quiz"
    //my logic flow is flawed. i want to prevent user from going to next question without selecting a choice
    
    //additional check to stop rerender hacky way but works
    let sameQuestion = currentTask
    sameQuestion++
    quizBtn.addEventListener("click",(e)=>{
        //this works but i rerender the same question and that is bad. for now i keep this
        if(quizEl.querySelector(`input:checked`)){
            currentTask++
        }
        //additional check to stop rerender hacky way but works
        if(sameQuestion !== currentTask){
            quizEventHandler(e.target, currentTask)
        }
        sameQuestion = currentTask
    })
    quizEl.append(quizBtn)
}
//     -1,        0,       1,        2,      3,      4
//  start quiz, first q, second q, last q,
function quizEventHandler(click,currentTask){
    /*
    this should handle getting next question and keeping users answers
    so im gonna write seperate function for getting and keeping answers
    clearing current question and drive towards next question until the end.
    3 unique states. start middle end. all driven by current task
    */
    let userScore = 0
    let submittedValues = quizEl.querySelectorAll(`input:checked`)
    for (const submit of submittedValues) {
        userScore += +submit.value
    }
    console.log(userScore)
    if(currentTask === (quizForm.length - 1)){
        reRenderQuiz(quizEl)
        click.textContent = "submit and get score"
        quizTaskHandler(currentTask)
    }
    else if(currentTask === quizForm.length){
        reRenderQuiz(quizEl)
        let result = showScore(userScore)
        quizEl.append(result)
    }
    else{
        reRenderQuiz(quizEl)
        quizTaskHandler(currentTask)
        click.textContent = "submit answer"
    }
}

function showScore(score){
    let scoreEl = elementCreator("p", {class: "scoreEl"})
    scoreEl.textContent = `you finished this quiz with a score of ${score}`
    return scoreEl
}

function reRenderQuiz(element){
    while(element.childElementCount > 1){
        element.removeChild(quizEl.lastChild)
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



//creates the html elements containing the quiz questions and their given choices
function quizTaskHandler(currentTask){
    const {question,options,scores,multipleChoice} = quizForm[currentTask]
    const quizContainer = elementCreator("div", {className: "quizcontainer"})
    const textP = elementCreator("p")
    textP.textContent = question
    quizEl.append(textP)
    
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
    quizEl.append(quizContainer)
}
