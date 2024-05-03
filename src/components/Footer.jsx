import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import linkedIn from '../assets/linkedIn.svg';
import gitLogo from '../assets/gitLogo.png';

export default function Footer(){
    return(
        <footer>
            <Container className='footer-container'>
                <Row>
                    <Col> <a href="https://github.com/manyanara"><img src={gitLogo} width={50} height={50} alt="grey vector of Github Logo" /></a> </Col>
                    <Col><a href="https://www.linkedin.com/in/manduul-naranzogt-116b1713b/"><img src={linkedIn} width={50} height={50} alt="grey vector of Github Logo" /></a> </Col>
                </Row>
            </Container>
        </footer>
    )
}