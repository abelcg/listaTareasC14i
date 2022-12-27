import React from 'react';
import { Alert } from 'react-bootstrap';

const Estado = ({comision , estado}) => {
   /// const {comision , estado} = props;
    return (
        <div>
            {estado ? <Alert variant="info">
                La comision {comision} esta habilitada
            </Alert> : null }
        </div>
    );
};

export default Estado;
