import { useContext, useState } from 'react';
import { Form, Button, Card, Row, Alert } from 'react-bootstrap';
import AuthContext from '../context/AuthContext';
import './Components.css'


const objForm = {
    email: "",
    password: ""
}

const Login = () => {
    //Usar contexto
    const { handleLogin } = useContext(AuthContext);
    //Crear estado del formulario
    const [form, setForm] = useState(objForm);

    const [show, setShow] = useState(false);

    const handleForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(form).then((status) => {
            if (status === 200) {
                setForm(objForm);
                setShow(false);
            } else {
                setShow(true);
            }
        });
    }

    return (
        <>
            <div className="login" id="login" border="light">
                <h2 className="nombreprincipal">Iniciar Sesión</h2>
                <hr className="lineForm" />
                <Alert variant="danger" show={show}>
                    Usuario no autorizado
                </Alert>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="LoginEmail">
                        <Form.Label className="etiqueta">Correo</Form.Label>
                        <Form.Control required value={form.email} onChange={handleForm} name="email" type="email" placeholder="Ingrese el correo" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="LoginPassword">
                        <Form.Label className="etiqueta">Contraseña</Form.Label>
                        <Form.Control className="entrada" required value={form.password} onChange={handleForm} name="password" type="password" placeholder="Ingresa tu Contraseña" />
                    </Form.Group>

                    <Button type="submit" className="botones rounded-0" style={{ background: "#724293" }}  >
                        Ingresar
                    </Button>
                </Form>
            </div>
        </>

    );

}

export default Login;