import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { apiLogin, apiRegistro } from "./Api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        let token = localStorage.getItem('token');
        if(token){
            setAuth(true);
        }
    },[]);

    const handleRegistro = (ObjUser) => {
        //Realizar petición al servidor
        fetch(apiRegistro, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ObjUser)
        }).then(async (resp) => {
            console.log(resp);
            if (resp.status === 201) {
                let json = await resp.json();
                let token = json.token;
                //Guardar token en localStorage (espacio en memoria del navegador)
                localStorage.setItem('token', token);
                setAuth(true);
                navigate('/')
            } else {
                console.log('No estás registrado')
            }
        }).catch(error => {
            console.log(error);
        });
    }

    const handleLogin = async (ObjUser) => {
        const resp = await fetch(apiLogin, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ObjUser)
        });
        if (resp.status === 200) {
            setAuth(true);
            navigate('/');
        }
        return resp;
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        setAuth(false);
    }

    const data = { handleRegistro, handleLogin, auth, handleLogout };


    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}
export { AuthProvider };
export default AuthContext;