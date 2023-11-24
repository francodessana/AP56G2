import "./styles.css";
import { useEffect, useState } from "react";
import TareaItem from "../TareaItem";
import Formulario from "../Formulario";

export default function ListaTareas() {
  const [lista, setLista] = useState([]);
  const [textoTarea, setTextoTarea] = useState("");
  const [idTarea, setIdTarea] = useState(lista.length);
  const [cambioLista, setCambioLista] = useState(false);

  useEffect(() => {
    const storedLista = localStorage.getItem("listaTareas");
    if (storedLista) {
      setLista(JSON.parse(storedLista));
    }
  }, []);

  useEffect(() => {
    if (cambioLista) {
      localStorage.setItem("listaTareas", JSON.stringify(lista));
      setTimeout(() => {
        setCambioLista(false);
      }, 2000);
    }
  }, [cambioLista, lista]);

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
        id: lista.length,
        textoTarea: textoTarea,
        completa: false,
      };
      setLista([...lista, nuevaTarea]);
      setTextoTarea("");
      setIdTarea(lista.length + 1);
      setCambioLista(true);
    }
  };

  const onKeyPressAgregar = (e) => {
    if (e.key === "Enter") {
      onClickAgregar();
    }
  };

  const borrarTarea = (id) => {
    const nuevaListaTareas = lista.filter((tarea) => tarea.id != id);
    setLista(nuevaListaTareas);
    setCambioLista(true);
  };

  const onClickEliminar = () => {
    const tareasCompletas = lista.filter((tarea) => tarea.completa);

    if (tareasCompletas.length === 0) {
      alert("No hay tareas completadas para eliminar.");
    } else {
      const tareasIncompletas = lista.filter((tarea) => !tarea.completa);
      setLista(tareasIncompletas);
      setCambioLista(true);
      const shouldDelete = window.confirm('¿Seguro que quieres eliminar las tareas completadas?');

      if (shouldDelete) {
        tareasIncompletas();
      }
    }
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      {cambioLista && <p>Se modificó la lista.</p>}{" "}
      {/* Si cambioLista es true, se muestra el mensaje. */}
      <ul>
        {lista.map((tarea) => {
          return (
            <TareaItem
              key={tarea.id}
              tareaTexto={tarea.textoTarea}
              tareaCompletada={tarea.completa}
              completa={() => setEstadoTarea(tarea.id)}
              borrarTarea={borrarTarea}
              id={tarea.id}
            ></TareaItem>
          );
        })}
      </ul>
      <Formulario
        textoTarea={textoTarea}
        onChangeTarea={onChangeTarea}
        onClickAgregar={onClickAgregar}
        onKeyPressAgregar={onKeyPressAgregar}
        onClickEliminar={onClickEliminar}
        lista={lista}
      />
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
        Agregar a la lista
      />

      {lista[0] === "" || lista[0]== null || lista[0] == undefined ? <Button disabled variant="contained" 
        onClick={onClickEliminar}>
        Eliminar
      </Button> : <Button variant="contained" onClick={onClickEliminar}>Eliminar</Button>}   */}
    </div>
  );
}
