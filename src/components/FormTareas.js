import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ListaTareas from "./ListaTareas";

const FormTareas = () => {
    //aqui va lógica
    //crear los state
    let tareasLocalStorage = JSON.parse(localStorage.getItem('listaTareas')) || [];
    const [tareas, setTareas] = useState(tareasLocalStorage);
    const [tareaIndividual, setTareaIndividual] = useState('');

    //aqui uso el ciclo de vida del componente
    /* useEffect(() => {
        //aqui se ejecuta tanto en montaje como actualización
        console.log('Ejecutando el ciclo de vida del componente FormTareas');
    });
     */
   /*  useEffect(() => {
        //aqui se ejecuta solo en montaje
        console.log('Ejecutando el ciclo de vida del componente FormTareas');
    },[]); //array de dependencias  */
     useEffect(() => {
        //aqui se ejecuta tanto en montaje como actualización
        //console.log('Ejecutando el ciclo de vida del componente FormTareas');
        localStorage.setItem('listaTareas', JSON.stringify(tareas));
    },[tareas]); //array de dependencias  


    const handleSubmit = (e)=>{
        e.preventDefault();

        //guardar cada una de las tareas en el array de tareas
        setTareas([...tareas, tareaIndividual]);
        //limpiar el input 
        setTareaIndividual('');
    }
    const borrarTarea = (nombre)=>{
        let arrayFiltrado = tareas.filter(tarea=> tarea !== nombre);
        setTareas(arrayFiltrado);
    };

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
                <ListaTareas arregloTareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
            </section>
        </>
    );
};

export default FormTareas;
