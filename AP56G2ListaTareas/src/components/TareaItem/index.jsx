import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import { IconButton, ListItem, ListItemText } from "@mui/material";


export default function TareaItem({ tareaTexto, tareaCompletada, completa }) {
  return (
    <ListItem>
      <IconButton onClick={completa}>
        {tareaCompletada ? <CheckBox color="success" /> : <CheckBoxOutlineBlank  />}
      </IconButton>
      <ListItemText primary={tareaTexto} />
    </ListItem>
  );
}
