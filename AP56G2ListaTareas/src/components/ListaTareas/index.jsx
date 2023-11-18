import './styles.css';
import { useState } from 'react';
//tarea es componente hijo
//formulario contiene el boton y el input

export default function ListaTareas() {
    const [lista, setLista] = useState([]);
    const [tarea, setTarea] = useState('');
    const [idTarea, setIdTarea] = useState(1);
    const onChangeTarea = (event) => {
        setTarea(event.target.value);
    };
    const onClickAgregar = () => {
        if(tarea === '') {
            
            console.log('Por favor, ingresa una tarea');
        }
        else {
            const nuevaTarea = {id: idTarea, tarea: tarea, estado: false};
            setLista([...lista, nuevaTarea]);
            setTarea('');
            setIdTarea(idTarea + 1);
        }
    };
    console.log("la lista actual es : " +lista);
    console.log("valor actual de tarea: " + tarea);
    return (
        <div>
            <h1>Lista de Tareas</h1>
            <ul>
                {lista.map((tarea) => {
                    return (
                        <li key={tarea.id}>
                            {tarea.tarea}
                        </li>
                    );
                })}
            </ul>
            
                <input
                    type="text"
                    value={tarea}
                    onChange={onChangeTarea}
                    placeholder="Ingresa una nueva tarea"
                />
                <button onClick={onClickAgregar}>agregar</button>
            
        </div>
    );
}
