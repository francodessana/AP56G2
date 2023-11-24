import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, ListItem, ListItemText } from "@mui/material";

export default function TareaItem({
  id,
  tareaTexto,
  tareaCompletada,
  estadoTarea,
  borrarTarea,
}) {
  const handleBorrarTarea = () => {
    borrarTarea(id);
  };

  return (
    <ListItem>
      <IconButton onClick={estadoTarea}>
        {tareaCompletada ? (
          <CheckBox color="success" />
        ) : (
          <CheckBoxOutlineBlank />
        )}
      </IconButton>
      <ListItemText
        primary={tareaTexto}
        style={{
          textDecoration: tareaCompletada ? "line-through" : "none",
        }}
      />
      <IconButton onClick={handleBorrarTarea}>
        <DeleteIcon style={{ color: "red" }} />
      </IconButton>
    </ListItem>
  );
}
