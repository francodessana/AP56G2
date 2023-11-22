import { Button, TextField } from "@mui/material";
export default function Formulario({textoTarea, onChangeTarea, onClickAgregar, onClickEliminar, lista}) {
    return (
        <div>
            <TextField
        type="text"
        value={textoTarea}
        onChange={onChangeTarea}
        placeholder="Ingresa una nueva tarea"
        margin="normal"
      ></TextField>

      <br />

      <Button
        variant="contained"
        onClick={onClickAgregar}
      >
        Agregar a la lista
      </Button>

      {lista[0] === "" || lista[0]== null || lista[0] == undefined ? <Button disabled variant="contained" 
        onClick={onClickEliminar}>
        Eliminar
      </Button> : <Button variant="contained" onClick={onClickEliminar}>Eliminar</Button>}
        </div>
    )
}