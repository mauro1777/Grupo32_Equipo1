import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import './Modificar.css'
import Input from './Componentes sin usar/Input.js'
import styled, {css} from 'styled-components'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import Images from './Images.js'

const objForm = {
    cod: " ",
    name: " ",
    description: " ",
    kind : " ",
    flavor: " ",
    brand: " ",
    presentation: " ",
    cont: " ",
    price: " ",
    id: ""
}


export default function FormExample() {

    const [form, setForm] = useState(objForm);

    const handleForm = (e) =>{
        setForm({...form, [e.target.name]: e.target.value})
    }

    const [codigo, cambiarCodido] = useState({campo:'', valido: null });
    const [nombre, cambiarNombre] = useState({campo:'', valido: null });
    const [descripcion, cambiarDescripcion] = useState({campo:'', valido: null });
    //const [tipo] = useState("{campo:'', valido: null }");
    //const [marca] = useState("{campo:'', valido: null }");
    const [sabor, cambiarSabor] = useState({campo:'', valido: null });
    const [presentacion, cambiarPresentacion] = useState({campo:'', valido: null });
    const [contenido, cambiarContenido] = useState({campo:'', valido: null });
    const [valor, cambiarValor] = useState({campo:'', valido: null });
    const [formularioValido, cambiarFormularioValido] = useState(null);

    const expresiones = {
        codigo: /^\d{1,5}$/, // 1 a 5 numeros
        nombreproducto: /^[a-zA-ZÀ-ÿ\s]{1,15}$/, // Letras y espacios, pueden llevar acentos.
        descripcion: /^[a-zA-ZÀ-ÿ\s]{1,100}$/, // Letras y espacios, pueden llevar acentos.
        sabor: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        presentacion: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        contenido: /^.{1,5}$/, // solo números.
        valor: /^\d{1,15}$/, //solo números
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        if(codigo.valido === 'true' &&
        nombre.valido === 'true' &&
        descripcion.valido === 'true' &&
        sabor.valido === 'true' &&
        presentacion.valido === 'true' &&
        contenido.valido === 'true' &&
        valor.valido === 'true'){
            cambiarFormularioValido(true);
            cambiarCodido({campo: '', valido: null});
            cambiarNombre({campo: '', valido: null});
            cambiarDescripcion({campo: '', valido: null});
            cambiarSabor({campo: '', valido: null});
            cambiarPresentacion({campo: '', valido: null});
            cambiarContenido({campo: '', valido: null});
            cambiarValor({campo: '', valido: null});
        }else{
            cambiarFormularioValido(false);
        }
    }


    return (
        <div className="div container align-items-center">
            <hr/>
            <Card><Card.Header as="h5" className="letra text-center">Editar Productos</Card.Header></Card>
            <hr/>
            <></>
            <></>

            <div className="row">
                <div className="col-md-6">
                    <Images />
                </div>
                <div className="col-md-6">

                    <Card>

                        <Card.Body >
                            <Form onSubmit={onSubmit}>
                                <Input 
                                estado = {codigo}
                                cambiarEstado = {cambiarCodido}
                                label="Código" 
                                placeholder="Código" 
                                type="number"
                                leyenda = "El código debe tener menos de 5 cifras" 
                                expresionregular ={expresiones.codigo}
                                name="codigo"
                                />
                                <Form.Group as={Col} md="12" controlId="validationCustom01">
                                </Form.Group>
                                <Form.Group as={Col} md="12" controlId="validationCustom02">
                                    <Input
                                    estado = {nombre}
                                    cambiarEstado = {cambiarNombre}
                                    label="Nombre del producto" 
                                    placeholder="Nombre del producto" 
                                    type="text"
                                    leyenda="El nombre del producto solo puede contener letras, espacios y acentos."
                                    expresionregular ={expresiones.nombreproducto}
                                    name="nombre" />
                                </Form.Group>
                                <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                                    <Input 
                                    estado = {descripcion}
                                    cambiarEstado = {cambiarDescripcion}
                                    label="Descripción" 
                                    placeholder="Descripción del producto" 
                                    type="text"
                                    leyenda="La descripción del producto solo puede contener letras, espacios y acentos."
                                    expresionregular ={expresiones.descripcion}
                                    name="descripcion"
                                     />
                                </Form.Group>
                                <Form.Group as={Col} md="12" controlId="validationCustomUsername">
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
                                    estado = {sabor}
                                    cambiarEstado = {cambiarSabor}
                                    label="Sabor" 
                                    placeholder="Sabor del producto" 
                                    type="text"
                                    leyenda="Ingresa un sabor válido." 
                                    expresionregular = {expresiones.sabor}
                                    name="sabor"/>
                                    
                                </Form.Group>

                                <Form.Group as={Col} md="12" controlId="validationCustom03">
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
                                                <option>Ramo</option>
                                            </Form.Select>
                                        </InputGroup>
                                    </div>

                                </Form.Group>
                                <Form.Group as={Col} md="12" controlId="validationCustom04">
                                    <Input 
                                    estado = {presentacion}
                                    cambiarEstado = {cambiarPresentacion}
                                    label="Presentación" 
                                    placeholder="Presentación del producto" 
                                    type="text"
                                    leyenda="La presentación del producto solo puede contener letras, espacios y acentos." 
                                    expresionregular ={expresiones.presentacion}
                                    name="presentacion"/>
                                </Form.Group>
                                <Form.Group as={Col} md="12" controlId="validationCustom05">
                                    <Input 
                                    estado = {contenido}
                                    cambiarEstado = {cambiarContenido}
                                    label="Contenido" 
                                    placeholder="Contenido neto del producto" 
                                    type="number"
                                    leyenda="El contenido del producto solo puede contener números."
                                    expresionregular ={expresiones.contenido}
                                    name="contenido" />
                                </Form.Group>
                                <Form.Group as={Col} md="12" controlId="validationCustom05">
                                    <Input 
                                    estado = {valor}
                                    cambiarEstado = {cambiarValor}
                                    label="Valor" 
                                    placeholder="Valor del producto" 
                                    type="number"
                                    leyenda="El valor del producto debe ser un número sin puntos."
                                    expresionregular ={expresiones.valor}
                                    name="valor"/>
                                </Form.Group>

                                <div>
                                    <tr >
                                        <td>
                                            <Button className="botones rounded-0" ><Nav.Link href="/">Volver</Nav.Link></Button>
                                            <Button type="submit" className="botones rounded-0" >Modificar Producto</Button>
                                            {formularioValido === true && <p className="mensajexito">Formulario enviado exitosamente!</p>}
                                        </td>
                                    </tr>
                                </div>

                                {formularioValido  === false && <div className="mensajerror">
                                    <p className="textoerror">
                                        <FontAwesomeIcon icon={faExclamationTriangle} />
                                        <b className="simerror">Error: </b> Por favor rellena el formulario correctamente.
                                    </p>
                                </div>}

                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <hr/>
        </div>
    );
}

