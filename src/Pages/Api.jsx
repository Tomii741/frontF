import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Tarjetas from '../Components/Tarjetas';
import { Row, Col } from 'react-bootstrap'

let nombre = 'pepe';

nombre = 'Rodo';

const Api = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(res => setCharacters(res.results))

        //trae todos los datos y despues hay q especificar
        /* .then(response => response.json())
        .then(json => setCharacters(json)) */
    },[])

    //puede estar por fuera o por dentro de la funcion
    const handleImprimir = () => {
        console.log('Buenas tardes, soy la funcion');
        console.log(characters);
        //console.log(characters.results); en caso de traer todos los datos
    };



    return (
        <div className="section m-5">
            <hr></hr>
            <h2 className="text-center">
                Api Page - { nombre }
            </h2>
            <hr></hr>
            <div className="text-center m-4">
                <Button onClick={handleImprimir} variant="w-50 m-2 bg-danger">
                    Imprimir en Consola los Datos
                </Button>
            </div>
            <div>
                <Row>
                    {characters.map((c) =>(
                        <Col key={c.id}>
                            <Tarjetas characters={c} />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}

export default Api;