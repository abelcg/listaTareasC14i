import React, { useState } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Titulo from "./components/Titulo";
import Subtitulo from "./components/Subtitulo";
import Container from "react-bootstrap/Container";
import FormTareas from './components/FormTareas';

function App() {
  //aqui va la lógica
  //definicion de los state
  const [habilitada, setHabilitada] = useState(true);

  return (
    <div>
      <Container>
        <Titulo comision='14i' estado={habilitada} />
        <Subtitulo></Subtitulo>
        <div className="text-center">
          <button className="btn btn-primary text-center" onClick={()=>setHabilitada(!habilitada)}>Habilitar</button>
        </div>
        <FormTareas></FormTareas>
      </Container>
    </div>
  );
}

export default App;
