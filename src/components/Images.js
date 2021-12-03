import React, { Component } from 'react';
import './Images.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { IconoCamara } from './Componentes sin usar/Elementos';

export class Images extends Component {
    state = {
        profileImg: 'http://www.stock.com.py/images/thumbs/0166200.jpeg'
    }
    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({ profileImg: reader.result })
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };
    render() {
        const { profileImg } = this.state
        return (
            <div className="page">
                <div className="contenedor">
                    <div className="img-holder">
                        <img src={profileImg} alt="" id="img" className="imagen" />
                    </div>
                    <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
                    <div className="etiqueta">
                        <label className="image-upload" htmlFor="input" >
                            <IconoCamara icon={faCamera} />
                            &nbsp;
                            Seleccionar Imagen
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default Images;