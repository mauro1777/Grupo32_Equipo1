import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import './Login.css';

export default function Login() {

    return (
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
    );

}