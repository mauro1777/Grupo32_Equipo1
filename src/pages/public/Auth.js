import React from 'react'
import Login from '../../components/Login'
import Registro from '../../components/Registro'

const Auth = () => {
    return (
        <div className="conDiv">
            <div className="divintento">
                <Registro />
            </div>
            <div >
                <Login />
            </div> 
            

        </div>
    )
}

export default Auth
