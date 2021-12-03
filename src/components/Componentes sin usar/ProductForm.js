import React from 'react'
import { Card, Button, Form, InputGroup, FormControl, Row, Col } from 'react-bootstrap'
import { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import '../Modificar.css'
import Input from './Input'
import styled, { css } from 'styled-components'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import Images from '../Images'
import ProductContext from '../../context/ProductContext'
//import ProductContext from '.../'

const objForm = {
    cod: " ",
    name: " ",
    description: " ",
    flavor: " ",
    presentation: " ",
    cont: " ",
    price: " "
}


const ProductForm = () => {

    const [cod, cambiarCodido] = useState({ campo: '', valido: null });
    const [name, cambiarNombre] = useState({ campo: '', valido: null });
    const [description, cambiarDescripcion] = useState({ campo: '', valido: null });
    //const [tipo] = useState("{campo:'', valido: null }");
    //const [marca] = useState("{campo:'', valido: null }");
    const [flavor, cambiarSabor] = useState({ campo: '', valido: null });
    const [presentation, cambiarPresentacion] = useState({ campo: '', valido: null });
    const [cont, cambiarContenido] = useState({ campo: '', valido: null });
    const [price, cambiarValor] = useState({ campo: '', valido: null });
    const [formularioValido, cambiarFormularioValido] = useState(null);

    const expresiones = {
        cod: /^\d{1,5}$/, // 1 a 5 numeros
        name: /^[a-zA-ZÀ-ÿ\s]{1,15}$/, // Letras y espacios, pueden llevar acentos.
        description: /^[a-zA-ZÀ-ÿ\s]{1,100}$/, // Letras y espacios, pueden llevar acentos.
        flavor: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        presentation: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        cont: /^.{1,5}$/, // solo números.
        price: /^\d{1,15}$/, //solo números
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,

    }

    const { handleCreate } = useContext(ProductContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        {/** const resp = await handleCreate(cod,name,description,flavor,presentation,cont,price);*/ }
        const resp = await handleCreate(form);
        if (cod.valido === 'true' &&
            name.valido === 'true' &&
            description.valido === 'true' &&
            flavor.valido === 'true' &&
            presentation.valido === 'true' &&
            cont.valido === 'true' &&
            price.valido === 'true' && resp.status === 201) {
            cambiarFormularioValido(true);
            cambiarCodido({ campo: '', valido: null });
            cambiarNombre({ campo: '', valido: null });
            cambiarDescripcion({ campo: '', valido: null });
            cambiarSabor({ campo: '', valido: null });
            cambiarPresentacion({ campo: '', valido: null });
            cambiarContenido({ campo: '', valido: null });
            cambiarValor({ campo: '', valido: null });
            setForm(objForm);
        } else {
            cambiarFormularioValido(false);
        }
    }


    const [form, setForm] = useState(objForm);

    const handleForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
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
                                <Input
                                    estado={cod}
                                    cambiarEstado={cambiarCodido}
                                    label="Código"
                                    placeholder="Código"
                                    type="number"
                                    leyenda="El código debe tener menos de 5 cifras"
                                    expresionregular={expresiones.cod}
                                    name="cod"
                                //onChange={handleForm}


                                />
                                <Form.Group as={Col} md="12" controlId="validationCustom01">
                                </Form.Group>
                                <Form.Group as={Col} md="12" controlId="validationCustom02">
                                    <Input
                                        estado={name}
                                        cambiarEstado={cambiarNombre}
                                        label="Nombre del producto"
                                        placeholder="Nombre del producto"
                                        type="text"
                                        leyenda="El nombre del producto solo puede contener letras, espacios y acentos."
                                        expresionregular={expresiones.name}
                                        name="name"
                                    //onChange={handleForm}
                                    //value={form.name} 
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                                    <Input
                                        estado={description}
                                        cambiarEstado={cambiarDescripcion}
                                        label="Descripción"
                                        placeholder="Descripción del producto"
                                        type="text"
                                        leyenda="La descripción del producto solo puede contener letras, espacios y acentos."
                                        expresionregular={expresiones.description}
                                        name="description"
                                    //onChange={handleForm}
                                    //value={form.description}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="12" name="kind"
                                    controlId="validationCustomUsername">
                                    <div>
                                        <Form.Label className="label">Tipo</Form.Label>
                                        <InputGroup className="mb-3">
                                            <Form.Select placeholder="Tipo"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1">
                                                <option>Lácteos</option>
                                                <option>Bebidas</option>
                                                <option>Galleteria</option>
                                            </Form.Select>
                                        </InputGroup>
                                    </div>
                                </Form.Group>
                                <Form.Group as={Col} md="12" controlId="validationCustom03">
                                    <Input
                                        estado={flavor}
                                        cambiarEstado={cambiarSabor}
                                        label="Sabor"
                                        placeholder="Sabor del producto"
                                        type="text"
                                        leyenda="Ingresa un sabor válido."
                                        expresionregular={expresiones.flavor}
                                        name="flavor"
                                    //onChange={handleForm}
                                    //value={form.flavor}
                                    />

                                </Form.Group>

                                <Form.Group as={Col} md="12" name="brand" controlId="validationCustom03">
                                    <div>
                                        <Form.Label className="label">Marca</Form.Label>
                                        <InputGroup className="mb-3">
                                            <Form.Select
                                                aria-describedby="basic-addon1">
                                                <option>Algarra</option>
                                                <option>Alpina</option>
                                                <option>Alquería</option>
                                                <option>Nestle</option>
                                                <option>Nutresa</option>
                                                <option>Parmalat</option>
                                                <option>Pomar</option>
                                                <option>Postobón</option>
                                                <option>Ramo</option>
                                            </Form.Select>
                                        </InputGroup>
                                    </div>

                                </Form.Group>



                                <Form.Group as={Col} md="12" controlId="validationCustom04">
                                    <Input
                                        estado={presentation}
                                        cambiarEstado={cambiarPresentacion}
                                        label="Presentación"
                                        placeholder="Presentación del producto"
                                        type="text"
                                        leyenda="La presentación del producto solo puede contener letras, espacios y acentos."
                                        expresionregular={expresiones.presentation}
                                        name="presentation"
                                    //onChange={handleForm}
                                    //value={form.presentation}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="12" controlId="validationCustom05">
                                    <Input
                                        estado={cont}
                                        cambiarEstado={cambiarContenido}
                                        label="Contenido"
                                        placeholder="Contenido neto del producto"
                                        type="number"
                                        leyenda="El contenido del producto solo puede contener números."
                                        expresionregular={expresiones.cont}
                                        name="cont"
                                    //onChange={handleForm}
                                    //value={form.cont}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="12" controlId="validationCustom05">
                                    <Input
                                        estado={price}
                                        cambiarEstado={cambiarValor}
                                        label="Valor"
                                        placeholder="Valor del producto"
                                        type="number"
                                        leyenda="El valor del producto debe ser un número sin puntos."
                                        expresionregular={expresiones.price}
                                        name="price"
                                    //onChange={handleForm}
                                    //value={form.price}
                                    />
                                </Form.Group>

                                <div>
                                    <tr >
                                        <td>
                                            <Button className="botones rounded-0" >Volver</Button>
                                            <Button type="submit" className="botones rounded-0" >Crear Producto</Button>
                                            {formularioValido === true && <p className="mensajexito">Formulario enviado exitosamente!</p>}
                                        </td>
                                    </tr>
                                </div>

                                {formularioValido === false && <div className="mensajerror">
                                    <p className="textoerror">
                                        <FontAwesomeIcon icon={faExclamationTriangle} />
                                        <b className="simerror">Error: </b> Por favor rellena el formulario correctamente.
                                    </p>
                                </div>}

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

export default ProductForm
