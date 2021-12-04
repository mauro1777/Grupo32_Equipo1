import React from 'react'
import Modificar from './Modificar'
import './Components.css'
import { Card, Button, Form, InputGroup, FormControl, Row, Col, Modal } from 'react-bootstrap'
import { useContext, useState, useEffect } from 'react'
import Images from './Images.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { IconoCamara } from './Componentes sin usar/Elementos';

const ProductModalDelete = ({show, handleClose}) => {

    return (
        <Modal.Dialog show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Eliminar</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>¿Estás seguro?</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary">No</Button>
                <Button variant="primary">Si</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}

export default ProductModalDelete