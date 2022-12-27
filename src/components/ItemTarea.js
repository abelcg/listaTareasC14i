import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ItemTarea = (props) => {
    return (
        <ListGroup.Item className='d-flex justify-content-between'>
            {props.dato}
            <button 
               className="btn btn-danger" 
               onClick={() => props.borrarTarea(props.dato)}>Borrar</button></ListGroup.Item>
    );
};

export default ItemTarea;
