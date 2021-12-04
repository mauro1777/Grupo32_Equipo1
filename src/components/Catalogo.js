import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'
import ProductCard from './ProductCard';
import './Components.css'

const Catalogo = () => {

    const { catalogue } = useContext(ProductContext);

    return (
        <div>
            <div className="contCard">
                {catalogue.map(e=><ProductCard key={e._id} objProduct={e} edit={false}/>)}
            </div>
        </div>

    )
}

export default Catalogo
