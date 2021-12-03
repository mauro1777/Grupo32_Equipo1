import React from 'react'
import Modificar from './Modificar'
import './Components.css'
import { Card, Button, Form, InputGroup, FormControl, Row, Col, Modal } from 'react-bootstrap'
import { useContext, useState, useEffect } from 'react'
import Images from './Images.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { IconoCamara } from './Componentes sin usar/Elementos';

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

const ProductFormModal = ({ show, handleClose, objProduct, handleUpdate }) => {

  //Estados
  const [form, setForm] = useState(objForm);

  useEffect(() => {
    setForm({
      cod: objProduct.cod,
      name: objProduct.name,
      description: objProduct.description,
      kind: objProduct.kind,
      flavor: objProduct.flavor,
      brand: objProduct.brand,
      presentation: objProduct.presentation,
      cont: objProduct.cont,
      price: objProduct.price,
      id: objProduct._id
    });
  }, [objProduct]);

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    handleUpdate(form);
    setForm(objForm);
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modificar Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <div className="div container align-items-center">
          <div className="row">
            <div className="col-md-12">
              <Card>
                <Card.Body >
                  <Form >
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
                    {/** Previsualización de la imagen >
                            <img height="60px" wigth="60px" src={form.url_img} />
                            &nbsp;
                            Seleccionar Imagen
                        </label> */}


                  </Form>
                </Card.Body>
              </Card>
            </div>
            {/**<div className="col-md-6">
              <Images />
            </div> */}

          </div>
          <hr />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleEdit}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ProductFormModal
