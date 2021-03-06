import React from 'react'
import { Route, Routes} from 'react-router'
import Catalogo from '../components/Catalogo'
import Crear from '../components/Componentes sin usar/Crear'
import Producto from '../components/Producto'
import Dashboard from '../pages/private/Dashboard'
import Modificar from '../components/Modificar'
import Consultar from '../components/Consultar'
import Formulario from '../components/Formulario'
import Recetas from '../components/Recetas'


const AuthRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard/>}>
                <Route index element={<Producto/>}/>
                <Route path="catalogo" element={<Catalogo/>}/>
                <Route path="crear" element={<Crear/>}/>
                <Route path="modificar" element={<Modificar/>}/>
                <Route path="consultar" element={<Consultar/>}/>
                <Route path="formulario" element={<Formulario/>}/>
                <Route path="recetas" element={<Recetas/>}/>
            </Route>
        </Routes>
    )
}

export default AuthRouter
