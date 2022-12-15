import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ItemTarea from './ItemTarea';

const ListaTareas = (props) => {
    return (
        <ListGroup>
         {props.arregloTareas.map(item => <ItemTarea tareas={item}/>)}
        </ListGroup>
    );
};

export default ListaTareas;