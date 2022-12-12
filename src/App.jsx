import logo from './logo.svg';
import './App.css';
import Login from "./components/login";
import Test from "./components/test";
import { Container, Row, Col, Cards } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>

      <Row className="justify-content-center aligne-items-end mt-5">
        <Col xs='4'>
          <div className="login-block"  >
            <Test />
           
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
