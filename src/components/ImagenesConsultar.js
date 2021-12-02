import React from "react"
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Form from 'react'
import "./ImagenesConsultar.css"



function ImagenesConsultar(){


    return(
        <div>
            <card>
                <Card.Body>
                <Row>
                        <Col xs={3} md={4}>
                            <Image className="img" src="https://metrocolombiafood.vteximg.com.br/arquivos/ids/161292-1000-1000/7702177001783-1.jpg?v=636670254574200000" rounded />
                        </Col>
                    </Row>
                </Card.Body>
            </card>
        </div>

    )
}

export default ImagenesConsultar
