import React from 'react'
import { Card, Button, Form, InputGroup, FormControl, Row, Col } from 'react-bootstrap'
import { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import './Modificar.css'
import Input from './Input.js'
import styled, { css } from 'styled-components'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import Images from './Images.js'
import ProductContext from '../context/ProductContext'

const objForm = {
    cod: " ",
    name: " ",
    description: " ",
    kind: " ",
    flavor: " ",
    brand: " ",
    presentation: " ",
    cont: " ",
    price: " ",
    id: ""
}

const Formulario = () => {

    const { handleCreate } = useContext(ProductContext);
    //Estados
    const [form, setForm] = useState(objForm);

    const handleForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resp = await handleCreate(form);
        if (resp.status === 201) {
            setForm(objForm);
        }

    };


    return (
        <div className="div container align-items-center">
            <hr />
            <Card><Card.Header as="h5" className="letra text-center">Crear Productos</Card.Header></Card>
            <hr />
            <></>
            <></>

            <div className="row">
                <div className="col-md-6">
                    <Card>
                        <Card.Body >
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="FormCod">
                                    <Form.Label>Codigo</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Ingresa el código del producto"
                                        required
                                        value={form.cod}
                                        onChange={handleForm}
                                        name="cod" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="FormName">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingresa el nombre del producto"
                                        required
                                        value={form.name}
                                        onChange={handleForm}
                                        name="name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="FormDescription">
                                    <Form.Label>Descripción</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingresa la descripción del producto"
                                        required
                                        value={form.description}
                                        onChange={handleForm}
                                        name="description" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="FormKind">
                                    <Form.Label>Tipo</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingresa el tipo de producto (Lácteos, bebidas,...)"
                                        required
                                        value={form.kind}
                                        onChange={handleForm}
                                        name="kind" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="FormFlavor">
                                    <Form.Label>Sabor</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingresa el sabor del producto"
                                        required
                                        value={form.flavor}
                                        onChange={handleForm}
                                        name="flavor" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="FormBrand">
                                    <Form.Label>Marca</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingresa la marca del producto"
                                        required
                                        value={form.brand}
                                        onChange={handleForm}
                                        name="brand" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="FormPresentation">
                                    <Form.Label>Presentación</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingresa la presentación del producto (botella, bolsa, botella de vidrio)"
                                        required
                                        value={form.presentation}
                                        onChange={handleForm}
                                        name="presentation" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="FormContent">
                                    <Form.Label>Contenido</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Ingresa el contenido del producto"
                                        required
                                        value={form.cont}
                                        onChange={handleForm}
                                        name="cont" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="FormPrice">
                                    <Form.Label>Precio</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Ingresa el precio del producto"
                                        required
                                        value={form.price}
                                        onChange={handleForm}
                                        name="price" />
                                </Form.Group>

                                <Button variant="success" type="submit">
                                    Crear
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6">
                    <Images />
                </div>
            </div>
            <hr />
        </div>
    );

}

export default Formulario;