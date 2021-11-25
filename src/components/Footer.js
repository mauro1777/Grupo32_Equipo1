import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import './CargarImagenes.css'

function Footer(){
    return (
        <div className="main-footer foot">
            <div className="container">
                <div className="row">
                    {/**Column 1 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Integrantes</h4>
                        <ul className="list-unstyled">
                            <li>Mauricio Arango</li>
                            <li>Vanessa Sosa</li>
                            <li>Himelda Palacios</li>
                            <li>Nelson Herrera</li>
                            <li>William </li>
                        </ul>
                    </div>
                    {/**Column 2 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Contáctanos</h4>
                        <ul className="list-unstyled">
                            <li>+57 300 000 0000</li>
                            <li>+57 300 000 0000</li>
                            <li>+57 300 000 0000</li>
                            <li>+57 300 000 0000</li>
                            <li>+57 300 000 0000</li>
                        </ul>
                    </div>
                    {/**Column 3 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Redes Sociales</h4>
                        <ul className="list-unstyled">
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                        </ul>
                    </div>
                    {/**Column 4 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                        </ul>
                    </div>
                </div>
               {/**Footer Bottom */}
               <div className="footer-bottom">
                   <p className="text-xs-center">
                       &copy;{new Date().getFullYear()} City Guide App - All rights Reserved
                   </p>
               </div>
            </div>
        </div>

    );
}

export default Footer;