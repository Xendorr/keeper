import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";

const Input = (props) => {
  const [input, setInput] = useState({ title: "", content: "" });
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  return (
    <div className="notes__container-input">
      <input
        type="text"
        placeholder="Take a note..."
        onChange={handleChange}
        onClick={() => {
          setIsExpanded(true);
        }}
        name="title"
        value={input.title}
      />
      {isExpanded && (
        <Zoom in={isExpanded}>
          <textarea
            placeholder="Description..."
            rows={isExpanded ? 3 : 1}
            name="content"
            onChange={handleChange}
            value={input.content}
          />
        </Zoom>
      )}
      <Zoom in={isExpanded}>
        <Fab
          onClick={() => {
            props.addItem(input);
            setInput({ title: "", content: "" });
            setIsExpanded(false);
          }}
        >
          <AddIcon />
        </Fab>
      </Zoom>
    </div>
  );
};

export default Input;
