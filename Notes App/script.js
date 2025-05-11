document.getElementById('saveBtn').addEventListener('click', saveNote);
document.getElementById('clearBtn').addEventListener('click', clearNotes);

function saveNote() {
    const noteText = document.getElementById('noteInput').value;
    if (noteText.trim() === '') {
        alert('Please write a note!');
        return;
    }

    const note = document.createElement('div');
    note.classList.add('note');
    note.textContent = noteText;

    document.getElementById('notesList').appendChild(note);
    document.getElementById('noteInput').value = '';  // Clear the textarea after saving
}

function clearNotes() {
    const notesList = document.getElementById('notesList');
    while (notesList.firstChild) {
        notesList.removeChild(notesList.firstChild);
    }
}
