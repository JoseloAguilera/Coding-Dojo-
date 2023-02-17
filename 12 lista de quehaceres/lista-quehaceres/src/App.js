import './App.css';
import { useState, useEffect } from 'react'; 

function App() {
  
  const [tareas, setTareas] = useState([]);
  
  useEffect(() => {
    const tareas = JSON.parse(localStorage.getItem('tareas'));
    if(tareas){
      setTareas(tareas);
    }
  }, []);

  const formSubmit = (e) => {
    e.preventDefault();

    const newTareas = [
      ...tareas,
      {
        id : Date.now().toString(),
        tarea : e.target.tarea.value,
        state : false
      }
    ]

    setTareas(newTareas);
    e.target.tarea.value = "";
    localStorage.setItem('tareas', JSON.stringify(newTareas));
  }

  const tareaCheck = (tarea) => {
    const newTareas = tareas.map((tareaItem) => {
      if(tareaItem.id === tarea.id){
        return {...tareaItem, state: !tareaItem.state}
      }
      return tareaItem;
    } );
    setTareas(newTareas);
  }

  const tareaDelete = (tarea) => {
    const newTareas = tareas.filter((tareaItem) => {
      return tareaItem.id !== tarea.id;
    });
    setTareas(newTareas);
    localStorage.setItem('tareas', JSON.stringify(newTareas));
  }

  return (
    <div className="App">
      <form onSubmit={formSubmit}>
        <input type="text" name='tarea' placeholder="Escriba una tarea" />
        <button class="add" type="input" >Add</button>
      </form>
      <ul>
        {
          tareas.map((tarea, index) => {
            return <li key={tarea.id} style={{
              textDecoration: tarea.state ? "line-through" : "",
            }}>
              {tarea.tarea} <input type="checkbox" onChange={()=>tareaCheck(tarea)} id={index} value={tarea} ></input>
              <button class="delete" type="input" onClick={()=> tareaDelete(tarea)} >Delete</button>
            </li>
          }
          )
        } 
      </ul>
    </div>
  );
}

export default App;