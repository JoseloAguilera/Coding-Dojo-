import {useState} from 'react';
import './App.css';
import FetchPkm from './components/FetchPkm';
import MostrarPkm from './components/MostrarPkm';

function App() {
  const [pkmns, setPkmns] = useState([]);
  
  return (
    <div className='App'>
      <FetchPkm setPkmns={setPkmns} />
      <MostrarPkm pkmns={pkmns}/>
    </div>
      
    
  );
}

export default App;
