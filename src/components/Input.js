import React from 'react';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faExclamationTriangle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import './Modificar.css'
import { Inputt, Labell, LeyendaError, IconoValidacion } from './Elementos';

/*** const Label = styled.label`
    ${props => props.valido === 'false' && css `
        color: #F66060
    `}
    `;*/


const ComponenteInput = ({ estado, cambiarEstado, label, placeholder, leyenda, expresionregular, name }) => {


    const onChange = (e) => {
        cambiarEstado({ ...estado, campo: e.target.value });
    }

    const validacion = () => {
        if (expresionregular) {
            if (expresionregular.test(estado.campo)) {
                cambiarEstado({ ...estado, valido: 'true' });
            } else {
                cambiarEstado({ ...estado, valido: 'false' });
            }
        }
    }

    return (
        <div>
            <Labell className="label" valido={estado.valido}>{label}</Labell>
            <InputGroup>
                <Inputt
                    required
                    placeholder={placeholder}
                    id={name}
                    value={estado.campo}
                    onChange={onChange}
                    onKeyUp={validacion}
                    onBlur={validacion}
                    valido={estado.valido}>
                </Inputt>
                <IconoValidacion
                        icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle}
                        valido={estado.valido}
                    />
            </InputGroup>
            <LeyendaError valido={estado.valido}>{leyenda}</LeyendaError>
        </div>
    );
}

export default ComponenteInput;