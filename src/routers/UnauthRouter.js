import React from 'react'
import { Route, Routes } from 'react-router'
import Auth from '../pages/public/Auth'
import Home from '../pages/public/Home'

const UnauthRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="auth" element={<Auth/>}></Route>
        </Routes>
    )
}

export default UnauthRouter
