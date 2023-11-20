import { Button, TextField } from "@mui/material";
import "./styles.css";
import { useState } from "react";
import TareaItem from "../TareaItem";

//tarea es componente hijo
//formulario contiene el boton y el input

export default function ListaTareas() {
  const [lista, setLista] = useState([]);
  const [textoTarea, setTextoTarea] = useState("");
  const [idTarea, setIdTarea] = useState(1);

  const onChangeTarea = (event) => {
    setTextoTarea(event.target.value);
  };

  /* Controla el estado de completado de cada tarea, toma como parametro el ID de la tarea seleccionada
     utiliza setLista para setear el nuevo estado de la lista y recibe como parametro el estado actual antes de ser modificado
     se utiliza .map() para iterar sobre cada tarea de la lista
     la condicion ternaria evalua si el id de la tarea es igual al proporcionado a setEstadoTarea, si es asi cambia el valor de la propiedad "completa"
     sino crea una tarea nueva identica a la anterior  */
  const setEstadoTarea = (id) => {
    setLista((prevLista) =>
      prevLista.map((tarea) =>
        tarea.id === id ? { ...tarea, completa: !tarea.completa } : tarea
      )
    );
  };

  const onClickAgregar = () => {
    if (textoTarea === "") {
      alert("Por favor, ingresa una tarea");
    } else {
      const nuevaTarea = {
        id: idTarea,
        textoTarea: textoTarea,
        completa: false,
      };
      setLista([...lista, nuevaTarea]);
      setTextoTarea("");
      setIdTarea(idTarea + 1);
    }
  };

  console.log("la lista actual es : " + lista);
  console.log("valor actual de tarea: " + textoTarea);
  console.log(lista);

  return (
    <div>
      <h1>Lista de Tareas</h1>

      <ul>
        {lista.map((tarea) => {
          return (
            <TareaItem
              key={tarea.id}
              tareaTexto={tarea.textoTarea}
              tareaCompletada={tarea.completa}
              completa={() => setEstadoTarea(tarea.id)}
            ></TareaItem>
          );
        })}
      </ul>

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
    </div>
  );
}
