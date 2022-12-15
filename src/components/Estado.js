import React from 'react';
import { Alert } from 'react-bootstrap';

const Estado = ({comision , estado}) => {
    return (
        <div>
            {estado ? <Alert variant="info">
                La comision {comision} esta habitada
            </Alert> : null }
        </div>
    );
};

export default Estado;