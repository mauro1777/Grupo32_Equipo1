import React from 'react'
import Login from '../../components/Login'
import Registro from '../../components/Registro'
import '../../components/Components.css'
import '../../components/Bienvenido.css'

const Auth = () => {
    return (
        <>
            <div>
                <h2 className="Prueba">Bienvenido A Tu Catálogo de Productos</h2>
            </div>

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
