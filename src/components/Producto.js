import React, { useContext } from 'react';
import ProductContext from '../context/ProductContext';
import ProductCard from './ProductCard';
import ProductForm from './ProductForm';
import Formulario from './Formulario';
import './Components.css';

const Producto = () => {

    const { products } = useContext(ProductContext);

    return (
        <div>
            <h2>Producto</h2>
            <Formulario />
            <div className="contCard">
                {products.map((e) => (
                    <ProductCard
                    key={e._id}
                    objProduct={e}
                />)


                )}
            </div>
        </div>
    )
}

export default Producto;

{/**key =  */ }
