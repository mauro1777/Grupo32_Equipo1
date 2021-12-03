import React, { createContext , useEffect, useState } from "react";
import { apiProducto, apiProductByUser } from "./Api";

const ProductContext = createContext();

const ProductProvider = ({children}) => {

    const [products, setProducts] = useState([]);
    const [catalogue, setCatalogue] = useState([])

    useEffect(()=>{
        getProducts();
        getAllProducts();
    },[])

    const handleCreate = async (objProduct)=>{
        const token = localStorage.getItem('token');
        const resp = await fetch(apiProducto, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(objProduct)
        });

        if(resp.status === 201){
            getProducts();
        }

        return resp;
    }

    const getProducts = async () => {
        const token = localStorage.getItem('token');
        let resp = await fetch(apiProductByUser, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}` 
            }
        });
        if(resp.status === 200){
            let json = await resp.json();
            setProducts(json);
        }
        return resp.status;
    }

    const setProduct = async (objProduct) => {
        const token = localStorage.getItem('token');
        let resp = await fetch(apiProducto, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(objProduct)
        });

        if(resp.status === 200){
            getProducts();
        }

        return resp.status;
    }

    {/**const delProduct = async (objProduct)=> {
        const token = localStorage.getItem('token');
        let resp = await fetch(apiProducto, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(objProduct)
        });
        if(resp.status === 200){
            setProducts();
        }

        return resp.status;

    } */}

    

    const getAllProducts = ()=>{
        fetch(apiProducto).then(async (resp)=>{
            let json = await resp.json();
            setCatalogue(json);
        }).finally();
    }
    

    const data = {handleCreate, getProducts, setProduct,products, getAllProducts, catalogue};

    return <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
}

export {ProductProvider};
export default ProductContext;