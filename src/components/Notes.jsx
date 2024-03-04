import React, { useState } from "react";
import "../styles/components/Notes.css";
import Note from "./Note";
import Input from "./Input";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const addItem = (input) => {
    setNotes((prevNotes) => {
      return [...prevNotes, input];
    });
  };

  const removeItem = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="notes__container">
      <div className="notes__container-input__container">
        <Input addItem={addItem} />
      </div>
      <div className="notes__container-note__container">
        {notes.map((noteItem, index) => (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onClick={removeItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Notes;
