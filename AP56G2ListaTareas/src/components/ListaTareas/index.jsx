import "./styles.css";
import { useEffect, useState } from "react";
import TareaItem from "../TareaItem";
import Formulario from "../Formulario";

export default function ListaTareas() {
  const [lista, setLista] = useState([]);
  const [textoTarea, setTextoTarea] = useState("");
  const [idTarea, setIdTarea] = useState(lista.length);
  const [cambioLista, setCambioLista] = useState(false);
  const [mensajes, setMensajes] = useState("");
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
        console.log("CAMBIO");
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
      setMensajes("Por favor, ingresa una tarea");
      setTimeout(() => {
        setMensajes("");
      } , 2000)
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
      setMensajes("No hay tareas completadas para eliminar");
      setTimeout(() => {
        setMensajes("");
      } , 2000)
    } else {
      const tareasIncompletas = lista.filter((tarea) => !tarea.completa);
      const shouldDelete = window.confirm(
        "¿Seguro que quieres eliminar las tareas completadas?"
      );

      if (shouldDelete) {
        setLista(tareasIncompletas);
        setCambioLista(true);
      }
    }
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div className="Mensajes"><h2>{mensajes}</h2></div>
      {cambioLista && <p>Se modificó la lista.</p>}{" "}
      {/* Si cambioLista es true, se muestra el mensaje. */}
      <ul>
        {lista.map((tarea) => {
          return (
            <TareaItem
              key={tarea.id}
              tareaTexto={tarea.textoTarea}
              tareaCompletada={tarea.completa}
              estadoTarea={() => setEstadoTarea(tarea.id)}
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
    </div>
  );
}
