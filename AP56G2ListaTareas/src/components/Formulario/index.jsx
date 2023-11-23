import { Button, Grid, TextField } from "@mui/material";
export default function Formulario({
  textoTarea,
  onChangeTarea,
  onClickAgregar,
  onKeyPressAgregar,
  onClickEliminar,
  lista,
}) {
  return (
    <div>
      <Grid
        container
        alignContent={"center"}
      >
        <Grid
          item
          xs={12}
        >
          <TextField
            label="Nueva Tarea"
            type="text"
            value={textoTarea}
            onChange={onChangeTarea}
            onKeyDown={onKeyPressAgregar}
            placeholder="Ingresa una nueva tarea"
            margin="normal"
            style={{
              width: "93%",
              marginBottom: "25px",
              backgroundColor: "white",
              border: "1px solid #9C8657",
              borderRadius: "10px",
            }}
          ></TextField>
        </Grid>

        <Grid
          item
          xs={12}
          sm={5.5}
        >
          <Button
            variant="contained"
            onClick={onClickAgregar}
            sx={{
              padding: "15px 40px",
              fontWeight: "bold",
              fontSize: "1em",
              marginBottom: "15px",
            }}
          >
            Agregar
          </Button>
        </Grid>

        <Grid
          item
          xs={12}
          sm={5.5}
        >
          {lista[0] === "" || lista[0] == null || lista[0] == undefined ? (
            <Button
              disabled
              variant="contained"
              onClick={onClickEliminar}
              sx={{ padding: "15px 40px", fontWeight: "bold", fontSize: "1em" }}
            >
              Eliminar completas
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={onClickEliminar}
              sx={{ padding: "15px 40px", fontWeight: "bold", fontSize: "1em" }}
            >
              Eliminar completas
            </Button>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
