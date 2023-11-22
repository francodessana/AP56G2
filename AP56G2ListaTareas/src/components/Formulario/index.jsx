import { Button, Grid, TextField } from "@mui/material";
export default function Formulario({ textoTarea, onChangeTarea, onClickAgregar, onClickEliminar, lista }) {
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
      <Grid container>
        <Grid item xs={5}>
          <Button
            variant="contained"
            onClick={onClickAgregar}
          >
            Agregar
          </Button>
        </Grid>

        <Grid item xs={7}>
          {lista[0] === "" || lista[0] == null || lista[0] == undefined ? <Button disabled variant="contained"
            onClick={onClickEliminar}>
            Eliminar completas
          </Button> : <Button variant="contained" onClick={onClickEliminar}>Eliminar completas</Button>}
        </Grid>
      </Grid>
    </div>
  )
}