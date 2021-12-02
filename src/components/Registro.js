import React, { useContext, useState } from 'react';
import {Form,Button,Card,Row} from 'react-bootstrap';
import AuthContext from '../context/AuthContext';
import './Login.css'

const objForm = {
    name: "",
    lastname: "",
    email: "",
    password: ""
}

export default function Registro() {

    const {handleRegistro} = useContext(AuthContext);

    const [form, setForm] = useState(objForm);

    const handleForm = (e) => {
        let obj = {...form, [e.target.name]: e.target.value};
        setForm(obj);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        handleRegistro(form);
        setForm(objForm);
    }

    return (
        <div className="div container align-items-center" id="login" border="light">
            <Card style={{ width: '30rem' }} >
            <Card.Header as="h5" className="letra text-center">Registrarse </Card.Header>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control required value={form.name} onChange={handleForm} name="name" type="text" placeholder="Ingrese su nombre" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="lastname">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control required value={form.lastname} onChange={handleForm} name="lastname" type="text" placeholder="Ingrese su apellido" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control required value={form.email} onChange={handleForm} name="email" type="email" placeholder="Ingrese su correo" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control required value={form.password} onChange={handleForm} name="password" type="password" placeholder="Contraseña" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" className="botones rounded-0" style={{ background: "#724293" }}  >
                        Registrarse
                    </Button>
                </Form>
            </Card>
            </div> 
    );

}