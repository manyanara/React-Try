import projects from '../utils/projects';
import ProjectCard from './ProjectCard';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default function Projects(){
    return (
    <Container>   
        <Row xs={1} md={2} className="g-4">
            {projects.map((project, index)=> {
                return (
                    <Col className="projectCard" key={index}>
                        <Card>
                        <Card.Body>
                        <ProjectCard {...project} />
                        </Card.Body>
                        </Card>
                    </Col>
                )
            })}    
        </Row>
    </Container> 
        
    )
};