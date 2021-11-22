import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import "./Consultar.css"
import CargarImagenes from './CargarImagenes.js'
import { useState } from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/Container'

export default function Crear() {

    const [codigo, setCodido] = useState(" ");
    const handleCodigo = (e) => { setCodido(e.target.value); }

    const [nombre, setNombre] = useState();
    const handleNombre = (e) => { setNombre(e.target.value); }

    //const [descripcion]
    //const [sabor]
    //const [presentacion]
    //const [contenido]
    //const [valor]

    return (
        <div className="div container align-items-center">
            <Card><Card.Header as="h5" className="letra text-center">Consultar Productos</Card.Header></Card>
            <></>
            <></>
            <div className="row">
                <div className="col-md-6">
                    <CargarImagenes />
                </div>
                <div className="col-md-6">
                    <Card>
                        <Card.Body >
                            {/***Código*****/}
                            {/***Contenedor para consultar producto ***/}
                            <Container>
                                <Row>
                                    <Col>
                                        <InputGroup className="mb-3" controlId="formCodigo">
                                            {/**<InputGroup.Text id="basic-addon1" >Código</InputGroup.Text> */}
                                            <FormControl
                                                placeholder="Código"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                type="number"
                                                value={codigo}
                                                onChange={handleCodigo}

                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col><Button className="botones rounded-0" >Consultar Producto</Button></Col>
                                </Row>
                            </Container>
                            {/***Nombre del producto*****/}
                            <InputGroup className="mb-3" controlId="formNombre">

                                <FormControl
                                    placeholder="Nombre Producto"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    type="text"
                                    value={nombre}
                                    onChange={handleNombre}

                                />
                            </InputGroup>
                            {/***Descripción*****/}
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Descripción"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    type="text"

                                />
                            </InputGroup>
                            {/***Tipo*****/}
                            <InputGroup className="mb-3">

                                <FormControl
                                    placeholder="Tipo"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    type="text"
                                />
                            </InputGroup>
                            {/***sabor*****/}
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Sabor"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    type="text"
                                />
                            </InputGroup>
                            {/***marca*****/}
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Marca"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    type="text"
                                />
                            </InputGroup>
                            {/***presentacion*****/}
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Presentación"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    type="text"

                                />
                            </InputGroup>
                            {/***Contenido neto*****/}
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Contenido neto"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    type="number"

                                />
                            </InputGroup>
                            {/***valor*****/}
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Valor"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    type="number"
                                />
                            </InputGroup>
                            <div>
                                <tr >
                                    <td>
                                        <Button className="botones rounded-0 " >Volver</Button>

                                    </td>
                                </tr>
                            </div>

                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div>

    );
}

