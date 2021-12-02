import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import '../CargarImagenes.css'
import canasta from './basket2.svg'

const Header = props => {
    return (
        <div className="header">
            <Navbar>
                <Container >
                    <Navbar.Brand href="#home" >

                        <img
                            src={canasta}
                            width="50"
                            height="40"
                            className="d-inline-block align-top"
                        />
                        <b className="letraHeader">Catálogo de Productos</b>
                        <Nav className="me-auto">
                            <Nav.Link href="/crear">Crear producto</Nav.Link>
                            <Nav.Link href="/modificar">Modificar producto</Nav.Link>
                            <Nav.Link href="/consultar">Consultar producto</Nav.Link>
                            <Nav.Link href="/recetas">Recetas</Nav.Link>
                        </Nav>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
}


export default Header;