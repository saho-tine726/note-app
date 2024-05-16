import React from "react";
import "./Main.css";
import Markdown from "react-markdown";

const Main = ({ activeNote, onUpdateNote }) => {
  const onEditNote = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      modDate: Date.now(),
    });
  };

  if (!activeNote) {
    return <div className="main main-noActive">No items selected</div>;
  }

  return (
    <div className="main">
      <div className="main_edit">
        <h2 className="main_editTitle">Edit</h2>
        <input
          id="title"
          type="text"
          value={activeNote.title}
          onChange={(e) => {
            onEditNote("title", e.target.value);
          }}
        />
        <textarea
          id="content"
          placeholder="Content Area"
          value={activeNote.content}
          onChange={(e) => {
            onEditNote("content", e.target.value);
          }}
        ></textarea>
      </div>
      <div className="main_preview">
        <h2 className="main_previewTitle">Preview</h2>
        <h3 className="main_title">{activeNote.title}</h3>
        <Markdown className="main_content">{activeNote.content}</Markdown>
      </div>
    </div>
  );
};

export default Main;
