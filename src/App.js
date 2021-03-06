import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Crear from '../src/components/Componentes sin usar/Crear'
import Modificar from './components/Modificar.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login.js'
import FormEjemplo from '../src/components/Componentes sin usar/FormEjemplo'
import Header from './components/Header Footer barra de menu principal/Header'
import Footer from './components/Header Footer barra de menu principal/Footer'
import Consultar from './components/Consultar.js'
import Images from './components/Images.js'
import UnauthRouter from './routers/UnauthRouter';
import AuthRouter from './routers/AuthRouter';
import { useContext } from 'react';
import AuthContext from './context/AuthContext';
import Recetas from './components/Recetas'



function App() {

  const {auth} = useContext(AuthContext);

  return (
    <div className="App">
      {auth? <AuthRouter/> : <UnauthRouter/>}
      {/** <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/crear" element={<Crear />}></Route>
          <Route path="/modificar" element={<Modificar />}></Route>
          <Route path="/consultar" element={<Consultar />}></Route>
          <Route path="/recetas" element={<Recetas />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />*/}
      
    </div>

  )
}


export default App;
