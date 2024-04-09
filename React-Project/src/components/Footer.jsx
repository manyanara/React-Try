import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer(){
    return(
        <footer>
            <Container className='footer-container'>
                <Row>
                    <Col> Github </Col>
                    <Col> LinkedIn </Col>
                </Row>
            </Container>
        </footer>
    )
}