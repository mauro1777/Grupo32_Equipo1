import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Crear from './components/Crear.js'
import Modificar from './components/Modificar.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login.js'
import FormEjemplo from './components/FormEjemplo.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'

function App() {

  return (
    <div className="App">
      <Header/>
      
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/crear" element={<Crear />}></Route>
          <Route path="/modificar" element={<Modificar />}></Route>
          <Route path="/formejemplo" element={<FormEjemplo/>}></Route>
          
        </Routes>
      </BrowserRouter>
<Footer/>
    </div>

  )
}


export default App;
