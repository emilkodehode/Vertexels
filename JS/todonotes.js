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

//just me making some initial data to use

// let notes = [{text: "i am a premade note example", id: 0},
// {text: "i have an existing id i should not be here wash me", id: 0},
// {text: "i am unique example", id: 42},]
// function storingData(data){
//     localStorage.setItem(`userNotes`, JSON.stringify(data))
// }
// storingData(notes)

//localStorage.clear()

const noteUserText = document.getElementById("note-user-input")
const noteUserSubmitBtn = document.getElementById("note-submit")
const notesContainer = document.getElementById("notes-container")
const deleteAll = document.getElementById("delete-everything")

deleteAll.addEventListener("click",()=>{
    localStorage.clear()
    loadStorageOnStartup()
})

noteUserSubmitBtn.addEventListener("click",
getUserInput)

function getUserInput(){
    let userText = noteUserText.value
    let newNote = ({text: userText, id: Date.now()})
    let oldData = JSON.parse(localStorage.getItem("userNotes"))
    oldData.push(newNote)
    localStorage.setItem(`userNotes`, JSON.stringify(oldData))
    renderNotes(oldData)
}

function noteAssembler(noteObj){
    const {text, id} = noteObj
    const container =  document.createElement("div")
    container.id = id
    container.className = "note"

    const note = document.createElement("p")
    note.textContent = text

    const delbtn =  document.createElement("button")
    delbtn.addEventListener("click", (event) => removeNote(event))
    delbtn.textContent = "Delete"

    container.append(note, delbtn)
    return container
}

function removeNote(event){
    let oldData = JSON.parse(localStorage.getItem(`userNotes`))
    let oldDataFiltered = oldData.filter(function (data){
        //parent id was a string so parse to num so comparison can work as expected.
        //console.log(data.id, +event.target.parentElement.id)
        if(data.id !== +event.target.parentElement.id){
            return data
        }
    })
    localStorage.setItem(`userNotes`, JSON.stringify(oldDataFiltered))
    event.target.parentElement.remove()
}

//compare array 1 and 2 if new element render it to keep things from being unique no dupliacte entries here
function renderNotes(userNotes){
    while(notesContainer.childElementCount > 0){
        notesContainer.lastChild.remove()
    }
    for (const noteObj of userNotes){
        let noteEL = noteAssembler(noteObj)
        notesContainer.prepend(noteEL)
    }
}

loadStorageOnStartup()
function loadStorageOnStartup(){
    let data = JSON.parse(localStorage.getItem("userNotes")) || []
    renderNotes(data)
    localStorage.setItem(`userNotes`, JSON.stringify(data))
}