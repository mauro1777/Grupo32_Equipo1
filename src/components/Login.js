import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css'
export default function Lista() {

    return (
        <>
            <h1>INICIAR SESIÓN</h1>
            <Form>
                <Form.Group className="mb-3"  controlId="Email">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese el correo" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Password">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
                <Button variant="primary" type="submit" className="botones rounded-0" style={{background:"#724293"}}  >
                    Ingresar
                </Button>
            </Form>
        </>
    );

}