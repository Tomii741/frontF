import React from 'react'
import { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios'

const About = () => {


        const [datos, setPersonas] = useState([]);

        //api de mi data

        //const URL = 'http://localhost:3001/datos'; //variable LOCAL

        const URL = 'https://backf-production.up.railway.app/datos'; //variable PRODUCCION
        
        //Creamos una función para el useEffect
        const getPersonas = async () => {
            try {
                const { data } = await axios.get(URL);
                setPersonas(data.datos);
                console.log(data.datos);
            } catch (error) {
            console.error(error);
            }
        }

        useEffect(() => {

        getPersonas()
        },[]);
    
    
    
        return (
        <div className='section m-5'>
            <h2>
                About page
            </h2>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>DNI</th>
                </tr>
            </thead>
            <tbody>
            {datos.map(dato => 
                <tr>
                    <td>{dato._id}</td>
                    <td>{dato.nombre}</td>
                    <td>{dato.apellido}</td>
                    <td>{dato.dni}</td>
                </tr>
            )}
            </tbody>
            </Table>
        </div>
        )
}

export default About;
