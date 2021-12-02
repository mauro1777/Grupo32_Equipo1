<<<<<<< HEAD
import { useContext, useState } from 'react';
import { Form, Button, Card, Row, Alert } from 'react-bootstrap';
import AuthContext from '../context/AuthContext';
import './Login.css'
=======
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import './Login.css';
>>>>>>> c2e414215f006f0f9ada677c848100ff5dcb2e9b

const objForm = {
    email: "",
    password: ""
}

export default function Login() {
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
        handleLogin(form).then(async (resp) => {
            if (resp.status === 200) {
                let json = await resp.json();
                localStorage.setItem('token', json.token);
                setForm(objForm);
                setShow(false);
            } else {
                setShow(true);
            }
        });




    }

    return (
<<<<<<< HEAD
        <div className="div container align-items-center" id="login" border="light">
            <Card className="divI">
                <Card.Header as="h5" className="letra text-center">Iniciar Sesión </Card.Header>
                <Alert variant="danger" show={show}>
                    Usuario no autorizado
                </Alert>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="LoginEmail">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control required value={form.email} onChange={handleForm} name="email" type="email" placeholder="Ingrese el correo" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="LoginPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control className="entrada" required value={form.password} onChange={handleForm} name="password" type="password" placeholder="Contraseña" />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="botones rounded-0" style={{ background: "#724293" }}  >
                        Ingresar
                    </Button>
                    <Button variant="primary" type="submit" className="botones rounded-0" style={{ background: "#724293" }}  >
                        Volver
                    </Button>
                </Form>
            </Card>
        </div>
=======
        <>
            <div className="div container align-items-center" id="login" border="light">
                <Card style={{ width: '38rem' }}>
                    <Card.Header as="h5" className="letra text-center">Login - Catalogo de Productos </Card.Header>

                    <Form>
                        <Form.Group className="mb-3" controlId="Email">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese el correo" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Password">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="botones rounded-0" style={{ background: "#724293" }}  >
                            Ingresar
                        </Button>
                        <Button variant="primary" type="submit" className="botones rounded-0" style={{ background: "#724293" }}  >
                        <Nav.Link href="/">Volver</Nav.Link>
                        </Button>
                    </Form>
                </Card>
            </div>
        </>
>>>>>>> c2e414215f006f0f9ada677c848100ff5dcb2e9b
    );

}