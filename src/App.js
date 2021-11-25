import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Crear from './components/Crear.js'
import Modificar from './components/Modificar.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login.js'
<<<<<<< HEAD
import FormEjemplo from './components/FormEjemplo.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
=======
import Consultar from './components/Consultar.js'
>>>>>>> 7c70d0a13e39166bb768cf7a5530ea660955c09c

function App() {

  return (
    <div className="App">
      <Header/>
      
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/crear" element={<Crear />}></Route>
          <Route path="/modificar" element={<Modificar />}></Route>
<<<<<<< HEAD
          <Route path="/formejemplo" element={<FormEjemplo/>}></Route>
          
=======
          <Route path="/consultar" element={<Consultar />}></Route>
>>>>>>> 7c70d0a13e39166bb768cf7a5530ea660955c09c
        </Routes>
      </BrowserRouter>
<Footer/>
    </div>

  )
}


export default App;
