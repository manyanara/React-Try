import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 

function NavTabs() {

  return (
    <Container fluid>
        <Row>
            
            <ul className="nav nav-tabs">

            <Col><li className="nav-item">
                <Link
                to="/">
                Home
                </Link>
            </li></Col>
            <Col><li className="nav-item">
                <Link
                to="/About">
                About
                </Link>
            </li></Col>
            <Col><li className="nav-item">
                <Link
                to="/Contact">
                Contact
                </Link>
            </li></Col>
            </ul>
    </Row>
    </Container>
  );
}

export default NavTabs;
