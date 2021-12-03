import React, { useState, useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import ProductContext from '../context/ProductContext';
import ProductFormModal from './ProductFormModal';


const ProductCard = ({ objProduct, edit }) => {

    const { setProduct } = useContext(ProductContext);
    const { delProduct } = useContext(ProductContext)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleUpdate = (obj) => {
        setProduct(obj);
    };
    
{/**  const handleDelete = (obj) => {
        delProduct(obj);
    }*/}
   
    





    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" />
                <Card.Body className="TextBody" >
                    <Card.Title className="TextTitle">{objProduct.name}</Card.Title>
                    <Card.Text className="TextCard">
                        Código: {objProduct.cod}
                        <hr className="line" />
                        Nombre: {objProduct.name}
                        <br />
                        Descripción: {objProduct.description}
                        <br />
                        Tpo: {objProduct.kind}
                        <br />
                        Sabor: {objProduct.flavor}
                        <br />
                        Marca: {objProduct.brand}
                        <br />
                        Presentación: {objProduct.presentation}
                        <br />
                        Contenido: {objProduct.cont}
                        <hr className="line" />
                        Precio: {objProduct.price}
                    </Card.Text>
                    <Button variant="warning" onClick={handleShow}>Modificar</Button>
                    &nbsp;
                    <Button variant="danger" onClick={handleShow}>Eliminar</Button>
                    {/** {edit ?
                        (
                        <>
                            
                        </>
                        ) 
                    : 
                    <Button variant="success"> Consultar </Button>} */}


                </Card.Body>
            </Card>
            {/**VENTANA EMERGENTE (modal) */}
            <ProductFormModal
                show={show}
                handleClose={handleClose}
                objProduct={objProduct}
            />
        </>
    )
}

export default ProductCard;
