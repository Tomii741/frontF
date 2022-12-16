import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'

const Formulario = () => {

    //Api de la database
    //const URL = 'http://localhost:3001/crear'; //variable LOCAL

    const URL = 'https://backf-production.up.railway.app/crear'; //variable PRODUCCION

    //inicializamos variables vacias para el useState
    const [inputs, setInputs] = useState({
        nombre: "",
        apellido: "",
        dni: ""
    })

    //funcion para setear las variables
    const handleChange = async (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    //funcion del post
    const handleClick = async () => {

        await axios.post(URL,inputs)//enviamos datos
        setInputs({//limpiamos los inputs
            nombre: "",
            apellido: "",
            dni: ""
        })
    }

    return (
        <div className="section m-5">
            <h2>
                Formulario Page
            </h2>
            <Form>
                {Object.keys(inputs).map((key, index) => (
                <Form.Group className="mb-3" key={index}>
                    <Form.Label id="form">
                        {key}
                    </Form.Label>
                    <Form.Control
                        name={key}
                        value={inputs[key]}
                        onChange={handleChange}
                    />
                </Form.Group>
                ))}

                <div className='text-center w-100'>
                    <Button variant="primary" type="submit" onClick={handleClick}>
                        Enviar Datos
                    </Button>
                </div>
                
            </Form>

        </div>
    )
}

export default Formulario;