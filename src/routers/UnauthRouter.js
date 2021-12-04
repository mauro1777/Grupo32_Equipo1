import React from 'react'
import { Route, Routes } from 'react-router'
import Auth from '../pages/public/Auth'
import Home from '../pages/public/Home'
import Modificar from '../components/Modificar'
import Recetas from '../components/Recetas'
import Nosotros from '../components/Nosotros'

const UnauthRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="auth" element={<Auth/>}></Route>
            <Route path="recetas" element={<Recetas/>}/>
            <Route path="nosotros" element={<Nosotros/>}></Route>
            
        </Routes>
    )
}

export default UnauthRouter
