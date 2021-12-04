import React, { useContext } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import canasta from '../../components/Header Footer barra de menu principal/basket2.svg'
import { Link } from 'react-router-dom';
import { ProductProvider } from '../../context/ProductContext';
import AuthContext from "../../context/AuthContext";
import '../../components/CargarImagenes.css'
import Catalogo from '../../components/Catalogo';

const Home = () => {
    return (
        <div>
            <Navbar className="header">
                <Container >
                    <Navbar.Brand href="#home" >
                        <img
                            src={canasta}
                            width="50"
                            height="40"
                            className="d-inline-block align-top"
                        />
                        &nbsp;
                        &nbsp;
                        <b className="letraHeader">Catálogo de Productos</b>
                        <Nav className="me-auto">   
                            <Nav.Link as={Link} to="/recetas" href="#recetas" className="letraEtiquetas">Recetas</Nav.Link>
                            <Nav.Link as={Link} to="/nosotros" href="#nosotros" className="letraEtiquetas">Nosotros</Nav.Link>
                            <Nav.Link as={Link} to="/auth" href="#salir" className="letraEtiquetas" >Iniciar Sesión</Nav.Link>
                        </Nav>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            {/**Aquí se mostrarán las componentes al navegar por las opciones del navbar */}
            <ProductProvider>
              <Catalogo/>  
            </ProductProvider>
        </div>
    )
}

export default Home
