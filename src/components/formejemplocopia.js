import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'
import CargarImagenes from './CargarImagenes.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import './Modificar.css'

export default function FormExample() {

    const expresiones = {
        codigo: /^\d{1,5}$/ //1 a 5 números
    }

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className="div container align-items-center">

            <Card><Card.Header as="h5" className="letra text-center">Editar Productos</Card.Header></Card>
            <></>
            <></>

            <div className="row">
                <div className="col-md-6">
                    <CargarImagenes />
                </div>
                <div className="col-md-6">

                    <Card>

                        <Card.Body >
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>

                                <Form.Group as={Col} md="12" controlId="validationCustom01">
                                    <Form.Label>Código</Form.Label>
                                    <div>
                                        <InputGroup>
                                            <Form.Control

                                                required
                                                type="text"
                                                placeholder="Código"
                                            //defaultValue="00000

                                            />
                                            <FontAwesomeIcon className="icono" icon={faCheckCircle} />
                                        </InputGroup>

                                    </div>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="12" controlId="validationCustom02">
                                    <Form.Label>Nombre del producto</Form.Label>
                                    <div><InputGroup>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Nombre del producto"
                                        //defaultValue="Ponque manchitas"
                                        />
                                        <FontAwesomeIcon className="icono" icon={faCheckCircle} />
                                    </InputGroup></div>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                                    <Form.Label>Descripción</Form.Label>
                                    
                                        <div>
                                            <InputGroup>
                                            <Form.Control
                                                type="text"
                                                placeholder="Descripción"
                                                aria-describedby="inputGroupPrepend"
                                                //required
                                            />
                                            
                                            </InputGroup>
                                            </div>
                                        <Form.Control.Feedback type="invalid">
                                            Escriba una descripción del producto a crear.
                                        </Form.Control.Feedback>
                                    
                                </Form.Group>


                                <Form.Group as={Col} md="12" controlId="validationCustom03">
                                    <Form.Label>Sabor</Form.Label>
                                    <div><InputGroup>
                                        <Form.Control
                                            type="text"
                                            placeholder="Sabor"
                                            required />
                                        <FontAwesomeIcon className="icono" icon={faCheckCircle} />
                                    </InputGroup></div>
                                    <Form.Control.Feedback type="invalid">
                                        Escriba el sabor del producto a crear.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="12" controlId="validationCustom04">
                                    <Form.Label>Presentación</Form.Label>
                                    <div><InputGroup>
                                        <Form.Control
                                            type="text"
                                            placeholder="Presentación"
                                            required />
                                        <FontAwesomeIcon className="icono" icon={faCheckCircle} />
                                    </InputGroup></div>
                                    <Form.Control.Feedback type="invalid">
                                        Especifique el envase del producto el cual va a crear.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="12" controlId="validationCustom05">
                                    <Form.Label>Contenido neto</Form.Label>
                                    <div><InputGroup>
                                        <Form.Control
                                            type="text"
                                            placeholder="Contenido neto"
                                            required />
                                        <FontAwesomeIcon className="icono" icon={faCheckCircle} />
                                    </InputGroup></div>
                                    <Form.Control.Feedback type="invalid">
                                        Especifique el contenido neto del producto el cual va a crear.
                                    </Form.Control.Feedback>
                                </Form.Group>



                                <div>
                                    <tr >
                                        <td>
                                            <Button className="botones rounded-0" >Volver</Button>
                                            <Button type="submit" className="botones rounded-0" >Crear Producto</Button>
                                        </td>
                                    </tr>
                                </div>

                            </Form>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div>
    );
}