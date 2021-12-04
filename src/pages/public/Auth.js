import React from 'react'
import Login from '../../components/Login'
import Registro from '../../components/Registro'
import '../../components/Components.css'
import '../../components/Bienvenido.css'
import { Link } from 'react-router-dom'

const Auth = () => {
    return (
        <>
        <Link to="/">Página Principal</Link> 
        <hr/>
                <h2 className="Prueba">Bienvenido A Tu Catálogo de Productos</h2>
            <div className="tarjetaHome" >
                <div>
                    <Registro />
                </div>
                <div>
                    <Login />
                </div>
            </div>
        </>
    )
}

export default Auth
