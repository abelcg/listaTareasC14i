import React from 'react';
import Estado from './Estado';

const Titulo = (props) => {
    //aqui va la lógica
    return (
        <div>
            <h1 className="display-4 text-center">Lista de tareas {props.comision}</h1>
            <Estado comision={props.comision} estado={props.estado}></Estado>
            <hr />
        </div>
    );
};

export default Titulo;