import React, { useState } from "react";
import styles from "./MyNotes.module.css"; // Import the CSS module
import studentsData from "../../StudentsData.jsx"; // Assuming this path is correct

function MyNotes() {
  // Assuming you have a way to get the current student's data, for now, I will just use the first student
  const student = studentsData[0]; // For example, using the first student

  // State to manage the new note
  const [newNote, setNewNote] = useState("");
  const [notes, setNotes] = useState(student.myNotes); // Initialize with the student's notes

  // Handle adding a new note
  const handleAddNote = () => {
    if (newNote.trim()) {
      const currentDate = new Date();
      const formattedDate = `${currentDate.toLocaleString("default", { weekday: "long" })}, ${currentDate.toLocaleString("default", { month: "long" })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
      const newNoteObject = {
        title: `Lesson ${notes.length + 1}`,
        date: formattedDate,
        note: newNote,
      };
      setNotes([...notes, newNoteObject]); // Add the new note
      setNewNote(""); // Clear the text area
    }
  };

  return (
    <div className={styles.myNotesContainer}>
      <div className={styles.previousNotes}>
        <h3>Previous Notes</h3>
        {notes.length > 0 ? (
          <ul>
            {notes.map((note, index) => (
              <li key={index} className={styles.noteItem}>
                <h4>{note.title}</h4>
                <p>{note.note}</p>
                <small>{note.date}</small>
              </li>
            ))}
          </ul>
        ) : (
          <p>No previous notes</p>
        )}
      </div>

      <div className={styles.addNote}>
        <h3>Add New Note</h3>
        <div className={styles.date}>
          {new Date().toLocaleString("default", { weekday: "long" })}, {new Date().toLocaleString("default", { month: "long" })} {new Date().getDate()}, {new Date().getFullYear()}
        </div>
        <textarea
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Write your note here..."
        ></textarea>
        <button onClick={handleAddNote}>Submit</button>
      </div>
    </div>
  );
}

export default MyNotes;


