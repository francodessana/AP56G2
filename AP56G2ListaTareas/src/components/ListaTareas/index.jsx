import "./styles.css";
import { useEffect, useState } from "react";
import TareaItem from "../TareaItem";
import Formulario from "../Formulario";

export default function ListaTareas() {
  const [lista, setLista] = useState([]);
  const [textoTarea, setTextoTarea] = useState("");
  const [idTarea, setIdTarea] = useState(1);
  const [cambioLista, setCambioLista] = useState(false);

  useEffect(() => {
    if (cambioLista) {
      setTimeout(() => {
        console.log("CAMBIO")
        setCambioLista(false);
      },2000); 
    }
  }, [cambioLista]);

  const onChangeTarea = (event) => {
    setTextoTarea(event.target.value);
  };

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
      setCambioLista(true);
    }
  };

  const onClickEliminar = () => {
    const tareasCompletas = lista.filter((tarea) => tarea.completa);

    if (tareasCompletas.length === 0) {
      alert("No hay tareas completadas para eliminar.");
    } else {
      const tareasIncompletas = lista.filter((tarea) => !tarea.completa);
      setLista(tareasIncompletas);
      setCambioLista(true);
    }
  };

  return (
    <div>
      
      <h1>Lista de Tareas</h1> 
      {cambioLista && <p>Se modificó la lista.</p>}  {/* Si cambioLista es true, se muestra el mensaje. */}
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
      
      <Formulario textoTarea={textoTarea} onChangeTarea={onChangeTarea} onClickAgregar={onClickAgregar} onClickEliminar={onClickEliminar} lista={lista}/>
      {/* <TextField
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
      </Button> : <Button variant="contained" onClick={onClickEliminar}>Eliminar</Button>}   */}
      
    </div>
  );
}
