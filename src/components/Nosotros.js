import React from 'react'
import './Recetas.css'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'


export default function Nosotros() {
    return (
        <>
            <Container>
                <h2>Nosotros</h2>
                <br />
                <Card border="success">
                    <Row id="stilefila">
                        <Col>
                            <Card.Img src="https://scontent.fclo9-1.fna.fbcdn.net/v/t1.18169-1/p200x200/29572264_10209444859279022_5718249205321465798_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Eg8n_q94oZAAX8Uuyqc&tn=ZXQGfaJcL2jO4bBX&_nc_ht=scontent.fclo9-1.fna&oh=ec0210512cc87c4c392fceae2a93048d&oe=616A246B" />
                        </Col>
                        <Col><Card.Body>
                            <Card.Title>Mauricio Arango</Card.Title>
                            <Card.Text>
                                <div>
                                    Estudiante Programación Mision Tic 2022
                                    <p>
                                        <ul>
                                            <li>Hola soy MAuricio Arango, soy de un pequeño y hermoso pueblo del norte del Valle del Cauca, tengo 20 años, estudiante de Ing.Mecatronica en la Universidad de Caldas estoy en mi noveno semestre. También de forma independiente soy tutor de las areas de matematicas y fisica. Espero llevar mi carrera y conocimientos de cursos en programación a otro nivel.</li>
                                            
                                        </ul>
                                    </p>

                                </div>
                                
                            </Card.Text>
                            
                        </Card.Body></Col>
                    </Row>
                </Card>
                <br />
                <Card border="success">
                    <Row>
                        <Col class="cloum1">
                            <Card.Img src="https://avatars.githubusercontent.com/u/78944732?v=4" />
                        </Col>
                        <Col><Card.Body>
                            <Card.Title>Lexly Vanessa Sosa</Card.Title>
                            <Card.Text>
                                <div>
                                    Estudiante Programación Mision Tic 2022
                                    <p>
                                        <ul>
                                            <li>Hola soy Lexly Sosa, soy de la ciudad de Bogotá, tengo 23 años y soy estudiante de Matemáticas en la universidad Distrital, me encuentro en mis dos últimos semestres del pregrado, trabajo de forma independiente como profesora particular de matemáticas.</li>
                                            
                                        </ul>
                                    </p>
                                </div>

                            </Card.Text>

                        </Card.Body></Col>
                    </Row>
                </Card>
                <br />
                <Card border="success">
                    <Row>
                        <Col>
                            <Card.Img src="https://avatars.githubusercontent.com/u/90426063?v=4"  />
                        </Col>
                        <Col><Card.Body>
                            <Card.Title>Nelson Herrera Castro</Card.Title>
                            <Card.Text>
                                <div>
                                Estudiante Programación Mision Tic 2022
                                    <p>
                                        <ul>
                                            <li>Hola, soy Nelson Herrera, soy de la ciudad de Cartagena, actualmente vivo en Mompós-Bolívar. Tengo estudios en ingeniería de sistemas, no culminados (VIII semestre), tengo cursos en diseño de páginas web con Macromedia Dreamweaver, ofimática, instalaciones eléctricas y en Salud y Seguridad en el Trabajo. Trabajo en el departamento de sistemas en una institución educativa del estado.</li>
                                            
                                        </ul>
                                    </p>
                                </div>

                            </Card.Text>
                        
                        </Card.Body></Col>
                    </Row>
                </Card>
                <br />
            </Container>
        </>
    );
}
