import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ListaTareas from "./ListaTareas";

const FormTareas = () => {
    //aqui va lógica
    //crear los state
    const [tareas, setTareas] = useState([]);
    const [tareaIndividual, setTareaIndividual] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();

        //guardar cada una de las tareas en el array de tareas
        setTareas([...tareas, tareaIndividual]);
        //limpiar el input 
        setTareaIndividual('');
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="m-3 text-center">
                    <Form.Control 
                    className="mb-3" type="text" 
                    placeholder="Ingrese su tarea" 
                    onChange={(e) => setTareaIndividual(e.target.value)}
                    value={tareaIndividual}  
                    />
                    <Button variant="primary" type="submit">
                        Agregar
                    </Button>
                </Form.Group>
            </Form>
            <section className="container">
                <ListaTareas arregloTareas={tareas}></ListaTareas>
            </section>
        </>
    );
};

export default FormTareas;