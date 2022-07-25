
let addNotes = document.getElementById('addNotes');
showNotes();
disabledBtn();

//localStorage.clear()

function disabledBtn(e){
    let inputbox = document.getElementById("addText").value;
    let addbtn = document.getElementById('addNotes');

    if(inputbox !== ""){       
        addbtn.disabled = false;
    }
    else{
        addbtn.disabled = true;
    }
   }

addNotes.addEventListener("click", function (e) {

    let addText = document.getElementById('addText');    
    let notes = localStorage.getItem('notes');

    if (notes === null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }

    notesObj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));      
    addText.value = ""; 
    showNotes();
    disabledBtn();

})


function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes === null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }
    let notebox = "";

    notesObj.forEach((element, id) => {
        notebox += `
                <div class="col-sm-6 col-md-4">
                    <div class="card mb-3">                        
                        <div class="card-body">
                        <h5 class="card-title">Notes: ${id + 1} </h5>
                        <p class="card-text">${element}</p>
                        <button id="${id}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                        </div>
                    </div>
                </div>
        
                    `
    });

    let notesList = document.getElementById('notesList');

    if (notesObj.length != 0) {
        notesList.innerHTML = notebox;
    } else {
        notesList.innerHTML = ` <h4>There is No Notes to display</h4>`
    }
}

function deleteNote(index) {
    //console.log('deleteing this', index)
    let notes = localStorage.getItem('notes');
    if (notes === null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

