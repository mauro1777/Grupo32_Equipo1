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
                            <Image className="img" src="https://cdn.shopify.com/s/files/1/0285/7222/1545/products/Chocoramo_1200x1200.jpg?v=1579882455" rounded />
                        </Col>
                    </Row>
                </Card.Body>
            </card>
        </div>

    )
}

export default ImagenesConsultar
