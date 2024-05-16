import React from "react";
import "./Sidebar.css";

const Sidebar = ({
  onAddNote,
  notes,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.modDate - a.modDate);

  return (
    <div className="sidebar">
      <div className="sidebar_head">
        <h1 className="sidebar_title">Note-app</h1>
        <button className="sidebar_addBtn" onClick={onAddNote}>
          Add
        </button>
      </div>
      <div className="sidebar_notes">
        {sortedNotes.map((note) => {
          return (
            <div
              className={`sidebar_note ${
                note.id === activeNote && "sidebar_note-active"
              }`}
              key={note.id}
              onClick={() => setActiveNote(note.id)}
            >
              <h2 className="sidebar_noteTitle">{note.title}</h2>
              <p className="sidebar_noteContent">{note.content}</p>
              <div className="sidebar_noteBottom">
                <p className="sidebar_noteDate">
                  {new Date(note.modDate).toLocaleDateString("ja-JP", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <button
                  className="sidebar_deleteBtn"
                  onClick={() => onDeleteNote(note.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
