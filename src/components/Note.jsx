import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Fab } from "@mui/material";

const Note = (props) => {
  return (
    <div className="notes__container-note">
      <h1 className="notes__container-note__title">{props.title}</h1>
      <p className="notes__container-note__text">{props.content}</p>
      <Fab onClick={() => props.onClick(props.id)}>
        <DeleteOutlineIcon />
      </Fab>
    </div>
  );
};

export default Note;
