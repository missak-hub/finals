
function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const noteList = document.getElementById('noteList');
    noteList.innerHTML = ''; 
    notes.forEach((note, index) => {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');
        noteDiv.innerHTML = `${note} <button class="delete-btn" onclick="deleteNote(${index})">Delete</button>`;
        noteList.appendChild(noteDiv);
    });
}


function saveNotes(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
}


document.getElementById('addNoteButton').addEventListener('click', () => {
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value.trim();
    if (noteText !== '') {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push(noteText);
        saveNotes(notes);
        noteInput.value = '';
        loadNotes(); 
    }
});


function deleteNote(index) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.splice(index, 1);
    saveNotes(notes);
    loadNotes(); 
}

loadNotes();