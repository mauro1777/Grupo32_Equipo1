import React, {useState, useContext} from 'react'
import {Card, Button} from 'react-bootstrap'
import ProductContext from '../context/ProductContext';
import ProductFormModal from './ProductFormModal';


const ProductCard = ({objProduct, edit}) => {

    const { setProduct } = useContext(ProductContext);
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleUpdate = (obj) => {
        setProduct(obj);
    };
  


    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" />
                <Card.Body>
                    <Card.Title>{objProduct.name}</Card.Title>
                    <Card.Text>
                        {objProduct.cod}
                        {objProduct.name}
                        {objProduct.description}
                        {objProduct.kind}
                        {objProduct.flavor}
                        {objProduct.brand}
                        {objProduct.presentation}
                        {objProduct.cont}
                        {objProduct.price}
                    </Card.Text>
                    <Button variant="warning" onClick={handleShow}>Modificar</Button>
                    &nbsp;
                    <Button variant="warning">Eliminar</Button>
                </Card.Body>
            </Card>
            {/**VENTANA EMERGENTE (modal) */}
                <ProductFormModal
                show={show}
                handleClose={handleClose}
                objProduct={objProduct}
                handleUpdate={handleUpdate}
                />
            </>
    )
}

export default ProductCard;
