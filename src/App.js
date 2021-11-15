import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Crear from './components/Crear.js'
import Modificar from './components/Modificar.js'
import { Route, Routes } from 'react-router';
import Login from './components/Login.js'

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/crear" element={<Crear/>}></Route>
        <Route path="/modificar" element={<Modificar/>}></Route>
      </Routes>

    </div>
      
  )
}

export default App;
