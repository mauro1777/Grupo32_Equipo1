import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import "./Modificar.css"
import CargarImagenes from './CargarImagenes.js'
import { useState } from 'react'

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
                            {/***Código*****/}
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

                                <Form.Select placeholder="Tipo"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1">
                                    <option>Lácteos</option>
                                    <option>Bebidas</option>
                                    <option>Galleteria</option>
                                </Form.Select>
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
                                <Form.Select placeholder="Marca"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1">
                                    <option>Algarra</option>
                                    <option>Alpina</option>
                                    <option>Alquería</option>
                                    <option>Nestle</option>
                                    <option>Nutresa</option>
                                    <option>Parmalat</option>
                                    <option>Pomar</option>
                                </Form.Select>
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
                                <Button className="botones rounded-0" >Actualizar Producto</Button>
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

