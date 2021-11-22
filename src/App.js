import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Crear from './components/Crear.js'
import Modificar from './components/Modificar.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login.js'
import Consultar from './components/Consultar.js'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/crear" element={<Crear />}></Route>
          <Route path="/modificar" element={<Modificar />}></Route>
          <Route path="/consultar" element={<Consultar />}></Route>
        </Routes>
      </BrowserRouter>

    </div>

  )
}


export default App;
