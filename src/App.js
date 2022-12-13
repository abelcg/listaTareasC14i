import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Titulo from "./components/Titulo";
import Subtitulo from "./components/Subtitulo";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div>
      <Container>
        <Titulo comision='14i' estado={true} />
        <Subtitulo></Subtitulo>
      </Container>
    </div>
  );
}

export default App;
