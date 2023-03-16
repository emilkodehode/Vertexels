/*
note taking functionality. little post it elements that user can make. this one shall be using localstorage to keep users notes alive in memory for later usage

first things should be making input and some storage functionality a barebones and work from there.


todo:
done: get user input
done: create note based on user input
done: display users created note

functionality to remove note
save notes
reload notes
*/

//how much should be done in html and ho much should be done in js

let notes = [{text: "i am unique example", id: 42},
{text: "i am unique example", id: 42},
{text: "i am a premade note example", id: 0},
{text: "i have an existing id i should not be here", id: 0},
{text: "i am unique example", id: 42},
{text: "i am unique example", id: 42},
{text: "i am unique example", id: 42}]

const noteUserText = document.getElementById("note-user-input")
const noteUserSubmitBtn = document.getElementById("note-submit")
const notesContainer = document.getElementById("notes-container")

noteUserSubmitBtn.addEventListener("click",
getUserInput)

function getUserInput(){
    let userText = noteUserText.value
    notes.push({text: userText, id: Date.now()})
    renderNotes(notes)
    console.log(notes)
}

function noteAssembler(noteObj){
    const {text, id} = noteObj
    const container =  document.createElement("div")
    container.id = id

    const note = document.createElement("p")
    note.textContent = text

    const delbtn =  document.createElement("button")
    delbtn.addEventListener("click", (event) => removeNote(event))
    delbtn.textContent = "Delete"

    container.append(note, delbtn)
    return container
}

function removeNote(event){
    console.log(event.target.textContent)
    event.target.parentElement.remove()
}

function localStorage(data){
    localStorage.setItem(`userNotes`, JSON.stringify(data))
}

localStorage(notes)

//compare array 1 and 2 if new element render it to keep things from being unique no dupliacte entries here
renderNotes(notes)
function renderNotes(notes){
    for (const noteObj of notes){
        let noteEL = noteAssembler(noteObj)
        notesContainer.prepend(noteEL)
    }
}