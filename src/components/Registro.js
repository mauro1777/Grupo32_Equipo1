import React, { useContext, useState } from 'react';
import { Form, Button, Card, Row } from 'react-bootstrap';
import AuthContext from '../context/AuthContext';
import './Login.css'
import './Components.css'

const objForm = {
    name: "",
    lastname: "",
    email: "",
    password: ""
}

export default function Registro() {

    const { handleRegistro } = useContext(AuthContext);

    const [form, setForm] = useState(objForm);

    const handleForm = (e) => {
        let obj = { ...form, [e.target.name]: e.target.value };
        setForm(obj);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegistro(form);
        setForm(objForm);
    }

    return (
        <>
            <div className="register" id="login" border="light">
                <h2 className="nombreprincipal">Registrar</h2>
                <hr className="lineForm" />
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label className="etiqueta">Nombre</Form.Label>
                        <Form.Control required value={form.name} onChange={handleForm} name="name" type="text" placeholder="Ingrese su nombre" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="lastname">
                        <Form.Label className="etiqueta">Apellido</Form.Label>
                        <Form.Control required value={form.lastname} onChange={handleForm} name="lastname" type="text" placeholder="Ingrese su apellido" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label className="etiqueta">Correo</Form.Label>
                        <Form.Control required value={form.email} onChange={handleForm} name="email" type="email" placeholder="Ingrese su correo" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label className="etiqueta">Contraseña</Form.Label>
                        <Form.Control required value={form.password} onChange={handleForm} name="password" type="password" placeholder="Contraseña" />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="botones rounded-0" style={{ background: "#724293" }}  >
                        Registrarse
                    </Button>
                </Form>

            </div>
        </>
    );

}