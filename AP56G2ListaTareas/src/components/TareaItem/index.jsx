import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import React from "react";

export default function TareaItem({ tareaTexto, tareaCompletada, completa }) {
  return (
    <ListItem>
      <IconButton onClick={completa}>
        {tareaCompletada ? <CheckBox /> : <CheckBoxOutlineBlank />}
      </IconButton>
      <ListItemText primary={tareaTexto} />
    </ListItem>
  );
}
